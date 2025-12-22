import { WeatherCondition } from "../types/wardrobe";

export async function fetchLocalWeather(lat: number, lon: number): Promise<WeatherCondition> {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  if (!res.ok) throw new Error("Failed to retrieve local weather data");
  const data = await res.json();
  return {
    temperature: data.current_weather.temperature,
    condition: data.current_weather.weathercode > 50 ? "rainy" : "sunny",
    humidity: 60,
    feelsLike: data.current_weather.temperature
  };
}
