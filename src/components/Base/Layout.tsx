import React, { ReactNode } from "react";
import { layout } from "../../style";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};
const Layout = ({ children, className, id = "#" }: Props) => {
  return (
    <section className={`${layout.section} $${className}`} id={id}>
      {children}
    </section>
  );
};

export default Layout;
