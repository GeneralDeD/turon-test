import { ReactNode } from "react";

interface IContainer {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: IContainer) => {
  return <section className={`max-w-6xl mx-auto px-5 py-10 ${className}`}>{children}</section>;
};

export default Container;
