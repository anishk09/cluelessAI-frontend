export interface TelemetryPayload {
  sessionId: string;
  eventType: "wardrobe_view" | "outfit_generate" | "trend_click";
  garmentId?: string;
  timestamp: number;
}

export interface MetricAggregation {
  dailyGenerations: number;
  acceptanceRate: number;
}
