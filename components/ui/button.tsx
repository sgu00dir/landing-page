import clsx from "clsx";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-brandBlue text-white hover:bg-brandBlue/90 focus:ring-brandBlue",
    secondary:
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400",
  } as const;

  return (
    <button className={clsx(base, variants[variant], className)} {...props} />
  );
}
