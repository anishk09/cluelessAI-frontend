import React from "react";
import { TrendCard } from "./TrendCard";

export const TrendExplorer: React.FC = () => {
  const trends = [
    { title: "Minimalist Layered Streetwear", source: "tiktok" as const, aestheticVector: ["monochrome", "boxy", "wool"], engagementScore: 9.4 },
    { title: "Spring Transitional Prep", source: "pinterest" as const, aestheticVector: ["knitwear", "earthtones", "oxford"], engagementScore: 8.8 }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Live Aesthetic Signals</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {trends.map(t => <TrendCard key={t.title} {...t} />)}
      </div>
    </div>
  );
};
