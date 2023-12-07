<template>
  <div class="container">
    <EchartCard :options="options1" />
    <EchartCard :options="options2" />
    <EchartCard :options="options3" />
    <EchartCard :options="options4" />
    <EchartCard :options="options5" />
    <EchartCard :options="options6" />
  </div>
</template>

<script setup>
import EchartCard from '../components/echart-card.vue'
import {
  options1,
  options2,
  options3,
  options4,
  options5,
  options6,
} from './dates'
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
}
</style>
