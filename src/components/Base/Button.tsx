import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}
const Button = ({ children, className, ...res }: ButtonProps) => {
  return (
    <button
      {...res}
      className={`py-4 px-6 bg-blue-gradient front-popins front-medium text-[18px] text-primary outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
