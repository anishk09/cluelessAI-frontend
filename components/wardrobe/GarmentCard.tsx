import React from "react";
import { GarmentItem } from "../../types/wardrobe";
import { Badge } from "../ui/Badge";

interface GarmentCardProps {
  item: GarmentItem;
  onSelect?: (item: GarmentItem) => void;
}

export const GarmentCard: React.FC<GarmentCardProps> = ({ item, onSelect }) => (
  <div onClick={() => onSelect?.(item)} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500 transition cursor-pointer group">
    <div className="aspect-square w-full bg-slate-950 relative overflow-hidden">
      <img src={item.s3ImageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
    </div>
    <div className="p-3">
      <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
      <div className="flex gap-1 mt-2">
        <Badge label={item.category} />
        <Badge label={item.formality} />
      </div>
    </div>
  </div>
);
