import React from "react";
import { GarmentItem } from "../../types/wardrobe";

interface OutfitCanvasProps {
  top?: GarmentItem;
  bottom?: GarmentItem;
  outerwear?: GarmentItem;
  footwear?: GarmentItem;
}

export const OutfitCanvas: React.FC<OutfitCanvasProps> = ({ top, bottom, outerwear, footwear }) => (
  <div className="border border-slate-800 bg-slate-950/80 rounded-2xl p-6 relative min-h-[380px] flex flex-col justify-between">
    <div className="grid grid-cols-2 gap-4">
      <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80">
        <span className="text-xs text-slate-500 uppercase">Top</span>
        <p className="text-sm text-slate-200 mt-1 font-medium">{top ? top.name : "None selected"}</p>
      </div>
      <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80">
        <span className="text-xs text-slate-500 uppercase">Bottom</span>
        <p className="text-sm text-slate-200 mt-1 font-medium">{bottom ? bottom.name : "None selected"}</p>
      </div>
      <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80">
        <span className="text-xs text-slate-500 uppercase">Outerwear</span>
        <p className="text-sm text-slate-200 mt-1 font-medium">{outerwear ? outerwear.name : "None required"}</p>
      </div>
      <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80">
        <span className="text-xs text-slate-500 uppercase">Footwear</span>
        <p className="text-sm text-slate-200 mt-1 font-medium">{footwear ? footwear.name : "None selected"}</p>
      </div>
    </div>
  </div>
);
