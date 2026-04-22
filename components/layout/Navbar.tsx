import React from "react";

export const Navbar: React.FC = () => (
  <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span className="text-lg font-black tracking-tight text-white">Clueless<span className="text-indigo-500">AI</span></span>
      <span className="text-[10px] uppercase font-bold tracking-widest bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">Console</span>
    </div>
    <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
      <a href="#wardrobe" className="hover:text-white transition">Closet</a>
      <a href="#trends" className="hover:text-white transition">Trends</a>
      <a href="#canvas" className="hover:text-white transition">Canvas</a>
    </div>
  </nav>
);
