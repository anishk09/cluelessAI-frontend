export type GarmentCategory = "tops" | "bottoms" | "outerwear" | "footwear" | "accessories";
export type FormalityLevel = "casual" | "smart-casual" | "business" | "formal";

export interface GarmentItem {
  id: string;
  userId: string;
  name: string;
  category: GarmentCategory;
  silhouette: string;
  dominantColor: string;
  accentColors: string[];
  fabricTexture: string;
  formality: FormalityLevel;
  s3ImageUrl: string;
  createdAt: string;
}

export interface WeatherCondition {
  temperature: number;
  condition: "sunny" | "rainy" | "cloudy" | "snow";
  humidity: number;
  feelsLike: number;
}

export interface RecommendationScore {
  trendScore: number;
  weatherScore: number;
  personalPreferenceScore: number;
  totalScore: number;
}
