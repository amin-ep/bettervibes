import clsx from "clsx";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className, ...rest }: Props) {
  return (
    <div className={clsx("mx-auto w-312 max-w-full px-2", className)} {...rest}>
      {children}
    </div>
  );
}

export default Container;
