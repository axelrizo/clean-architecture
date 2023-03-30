import { axiosInstance } from "@/config/openWeatherMap.instance";
const apiKey = import.meta.env.VITE_API_KEY;

export const getCurrentWeather = async ({ city }: { city: string }) => {
  const response = await axiosInstance.get("/weather", {
    params: { q: city, appid: apiKey },
  });
  const data = response.data;
  return data;
};
