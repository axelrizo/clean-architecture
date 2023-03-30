<script lang="ts" setup>
import OpenWeatherCard from "../weather/infrastructure/components/OpenWeatherCard.vue";
import MockCard from "../weather/infrastructure/components/MockCard.vue";
</script>

<template>
  <v-row class="flex">
    <v-col>
      <OpenWeatherCard />
    </v-col>
    <v-col>
      <MockCard />
    </v-col>
  </v-row>
</template>
