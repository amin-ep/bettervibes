import clsx from "clsx";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function MainContainer({ children, className, ...rest }: Props) {
  return (
    <div
      className={clsx(
        "mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default MainContainer;
