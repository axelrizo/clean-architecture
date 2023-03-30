import { WeatherValue } from "./../../domain/weather.value";
import * as openWeatherWeatherServices from "./../services/openWeatherMap.service";
import { WeatherEntity } from "@/weather/domain/weather.entity";
import { WeatherRepository } from "@/weather/domain/weather.repository";

export class OpenWeatherMapRepository implements WeatherRepository {
  getCurrentWeather = async ({
    city,
  }: {
    city: string;
  }): Promise<WeatherEntity> => {
    const data = await openWeatherWeatherServices.getCurrentWeather({ city });
    const weatherItem: WeatherEntity = {
      humidity: data.main.humidity,
      temperature: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      visibility: data.visibility,
      weather: {
        description: data.weather[0].description,
      },
      wind: {
        deg: data.wind.deg,
        speed: data.wind.speed,
      },
    };
    return new WeatherValue(weatherItem);
  };
}
