import { useState, useEffect } from "react";
import { WeatherCondition } from "../types/wardrobe";
import { fetchLocalWeather } from "../services/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherCondition | null>(null);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => fetchLocalWeather(pos.coords.latitude, pos.coords.longitude).then(setWeather).catch(() => {}),
      () => setWeather({ temperature: 68, condition: "sunny", humidity: 45, feelsLike: 68 })
    );
  }, []);

  return weather;
}
