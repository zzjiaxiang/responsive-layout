import * as echarts from 'echarts'
import { throttle } from 'lodash-es'

export default function (el) {
  const echartInstance = echarts.init(el, null, { renderer: 'canvas' })

  const setOptions = (options) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  const debouncedResizeChart = throttle(() => echartInstance.resize(), 400)
  window.addEventListener('resize', () => debouncedResizeChart())
  return {
    echartInstance,
    setOptions,
    updateSize,
  }
}
