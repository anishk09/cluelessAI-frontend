import React from "react";

interface TrendProps {
  title: string;
  source: "tiktok" | "pinterest";
  aestheticVector: string[];
  engagementScore: number;
}

export const TrendCard: React.FC<TrendProps> = ({ title, source, aestheticVector, engagementScore }) => (
  <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-xs uppercase tracking-wider font-bold text-indigo-400">{source}</span>
      <span className="text-xs text-slate-500">★ {engagementScore.toFixed(1)}</span>
    </div>
    <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
    <div className="flex flex-wrap gap-1 mt-1">
      {aestheticVector.map((tag) => (
        <span key={tag} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
          #{tag}
        </span>
      ))}
    </div>
  </div>
);
