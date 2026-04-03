import React from "react";
import { RecommendationScore } from "../../types/wardrobe";

export const ScoreBreakdown: React.FC<{ score: RecommendationScore }> = ({ score }) => (
  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
    <div className="flex justify-between text-xs text-slate-400">
      <span>Trend Concordance</span>
      <span className="font-bold text-white">{(score.trendScore * 100).toFixed(0)}%</span>
    </div>
    <div className="flex justify-between text-xs text-slate-400">
      <span>Weather Appropriateness</span>
      <span className="font-bold text-white">{(score.weatherScore * 100).toFixed(0)}%</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-2">
      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${score.totalScore * 100}%` }} />
    </div>
  </div>
);
