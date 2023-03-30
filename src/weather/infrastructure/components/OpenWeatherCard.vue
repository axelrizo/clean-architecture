<script setup lang="ts">
import { onMounted } from "vue";
import { OpenWeatherMapRepository } from "../repository/openWeatherMap.repository";
import { WeatherUseCase } from "../../application/weather.usecase";
import { ref, Ref } from "vue";
import { WeatherEntity } from "@/weather/domain/weather.entity";
const weatherRepository = new OpenWeatherMapRepository();
const weatherUseCase = new WeatherUseCase(weatherRepository);
const data: Ref<WeatherEntity | null> = ref(null);
const city = ref("cancun");
const searchedCity = ref("");
const fetchWeather = async () => {
  try {
    data.value = await weatherUseCase.getCurrent({
      city: city.value,
    });
    searchedCity.value = city.value;
  } catch (error) {
    data.value = null;
  }
};
onMounted(async () => {
  await fetchWeather();
});
</script>

<template>
  <v-card width="320px" class="mx-auto mt-5">
    <v-text-field type="text" v-model="city" />
    <v-btn @click="fetchWeather">Search</v-btn>
    <h1 class="text-no-wrap">OpenWeather Data:</h1>
    <h2 class="text-capitalize">{{ searchedCity }}</h2>
    <h1 v-if="!data">Not Found</h1>
    <div v-else>
      <p><b>Temperature: </b>{{ data.temperature }}</p>
      <p><b> Humidity: </b>{{ data.humidity }}</p>
      <p><b>Max temperature: </b>{{ data.tempMax }}</p>
      <p><b>Min temperature: </b>{{ data.tempMin }}</p>
      <p><b>Visibility: </b>{{ data.visibility }}</p>
      <p><b>Weather description: </b>{{ data.weather.description }}</p>
      <p><b>Wind speed: </b>{{ data.wind.speed }}</p>
      <p><b>Wind direction: </b>{{ data.wind.deg }}</p>
    </div>
  </v-card>
</template>

<style scoped></style>
