import { useState, useEffect } from "react";
import { GarmentItem } from "../types/wardrobe";
import { fetchWithAuth } from "../services/apiClient";

export function useWardrobe() {
  const [items, setItems] = useState<GarmentItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshWardrobe = async () => {
    setLoading(true);
    try {
      const data = await fetchWithAuth<GarmentItem[]>("/api/v1/wardrobe/items");
      setItems(data);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refreshWardrobe(); }, []);

  return { items, loading, refreshWardrobe };
}
