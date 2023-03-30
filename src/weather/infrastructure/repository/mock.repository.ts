import { WeatherValue } from "./../../domain/weather.value";
import { WeatherEntity } from "@/weather/domain/weather.entity";
import { WeatherRepository } from "@/weather/domain/weather.repository";

export class MockRepository implements WeatherRepository {
  getCurrentWeather = async ({
    city,
  }: {
    city: string;
  }): Promise<WeatherEntity> => {
    const weatherItem: WeatherEntity = {
      humidity: 1,
      temperature: 2,
      tempMax: 3,
      tempMin: 4,
      visibility: 5,
      weather: {
        description: "test",
      },
      wind: {
        deg: 6,
        speed: 7,
      },
    };
    return new WeatherValue(weatherItem);
  };
}
