import Image from "next/image";
import React from "react";

function EmptyMusicsSection() {
  return (
    <div className="flex w-full flex-col items-center">
      <h4 className="!font-poppins text-2xl md:text-3xl">No Music Found!</h4>
      <Image
        src="/icons/empty-box.svg"
        alt="Empty music box"
        width={240}
        height={180}
      />
    </div>
  );
}

export default EmptyMusicsSection;
