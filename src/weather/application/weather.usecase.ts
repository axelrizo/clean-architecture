import { WeatherRepository } from "../domain/weather.repository";

export class WeatherUseCase {
  constructor(private readonly weatherRepository: WeatherRepository) {}
  public getCurrent = async ({ city }: { city: string }) => {
    const data = await this.weatherRepository.getCurrentWeather({ city });
    return data;
  };
}
