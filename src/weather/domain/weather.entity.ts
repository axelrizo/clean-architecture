export interface WeatherEntity {
  temperature: number;
  humidity: number;
  tempMin: number;
  tempMax: number;
  visibility: number;
  weather: { description: string };
  wind: {
    speed: number;
    deg: number;
  };
}
