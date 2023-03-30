import { WeatherEntity } from "./weather.entity";

export interface WeatherRepository {
  getCurrentWeather({ city }: { city: string }): Promise<WeatherEntity>;
}
