<template>
  <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import useEchart from './useEchart'
const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  options: {
    type: Object,
    default: () => ({}),
  },
})
const echartDivRef = ref()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
