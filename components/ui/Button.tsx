import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", isLoading, className = "", ...props }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center justify-center";
  const styles = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100",
    outline: "border border-slate-700 hover:bg-slate-800 text-slate-300"
  };
  return (
    <button className={`${base} ${styles[variant]} ${isLoading ? "opacity-50 pointer-events-none" : ""} ${className}`} {...props}>
      {isLoading ? "Processing..." : children}
    </button>
  );
};
