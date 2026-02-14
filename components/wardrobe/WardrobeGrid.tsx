import React from "react";
import { GarmentItem } from "../../types/wardrobe";
import { GarmentCard } from "./GarmentCard";

interface WardrobeGridProps {
  items: GarmentItem[];
  isLoading: boolean;
}

export const WardrobeGrid: React.FC<WardrobeGridProps> = ({ items, isLoading }) => {
  if (isLoading) return <div className="text-slate-400 py-12 text-center">Indexing wardrobe...</div>;
  if (!items.length) return <div className="text-slate-500 py-12 text-center">No garments cataloged yet.</div>;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map(item => <GarmentCard key={item.id} item={item} />)}
    </div>
  );
};
