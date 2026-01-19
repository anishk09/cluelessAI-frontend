import React from "react";

interface BadgeProps {
  label: string;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, color = "bg-indigo-900/50 text-indigo-300 border-indigo-700/50" }) => (
  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${color}`}>
    {label}
  </span>
);
