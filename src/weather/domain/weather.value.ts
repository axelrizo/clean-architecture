import { WeatherEntity } from "./weather.entity";

export class WeatherValue implements WeatherEntity {
  temperature: number;
  humidity: number;
  tempMin: number;
  tempMax: number;
  weather: { description: string };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };

  constructor({
    temperature,
    humidity,
    tempMin,
    tempMax,
    weather,
    visibility,
    wind,
  }: WeatherEntity) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.weather = weather;
    this.visibility = visibility;
    this.wind = wind;
  }
}
