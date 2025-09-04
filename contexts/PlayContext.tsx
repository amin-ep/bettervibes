"use client";

import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface IContext {
  isLoading: boolean;
  isPlaying: boolean;
  currentPlayingMusic: Music | null;
  togglePlay: (musicId: string) => void;
}

const PlayContext = createContext({} as IContext);

export function PlayProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingMusic, setCurrentPlayingMusic] = useState<null | Music>(
    null,
  );

  const { isLoading, data } = useQuery({
    queryKey: ["musics"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/music`)
        .then((res) => res.json())
        .then((data: { status: string; data: { docs: Music[] } }) => {
          return data.data.docs;
        }),
  });

  const togglePlay = useCallback(
    (musicId: string) => {
      if (data) {
        const targetMusic = data.find((music) => music._id == musicId);
        if (!targetMusic) {
          throw new Error("Cannot find music");
        }
        if (currentPlayingMusic && musicId == currentPlayingMusic._id) {
          setIsPlaying((state) => !state);
        } else if (
          (currentPlayingMusic && musicId != currentPlayingMusic._id) ||
          !currentPlayingMusic
        ) {
          setIsPlaying(true);
          setCurrentPlayingMusic(targetMusic);
        }
      }
    },
    [currentPlayingMusic, data],
  );

  return (
    <PlayContext
      value={{
        isLoading,
        isPlaying,
        currentPlayingMusic,
        togglePlay,
      }}
    >
      {children}
    </PlayContext>
  );
}

export const usePlay = () => {
  const context = useContext(PlayContext);

  if (!context) {
    throw new Error("Cannot use usePlay outside of PlayProvider");
  } else {
    return context;
  }
};
