export function calculateColorCompatibility(hex1: string, hex2: string): number {
  if (hex1 === hex2) return 0.8;
  const isNeutral = (hex: string) => ["#000000", "#FFFFFF", "#808080", "#1E293B"].includes(hex.toUpperCase());
  if (isNeutral(hex1) || isNeutral(hex2)) return 0.95;
  return 0.75;
}
