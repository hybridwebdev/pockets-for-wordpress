import { watch } from 'vue'
import { useDocumentVisibility, useIntervalFn } from '@vueuse/core'

export function documentVisibilityInterval(
  callback: () => void,
  interval = 1000,
  whenVisible = false
) {
  const visibility = useDocumentVisibility()

  const { pause, resume, isActive } = useIntervalFn(callback, interval, {
    immediate: false,
  })

  const shouldRun = (state: DocumentVisibilityState) => {
    return whenVisible ? state === 'visible' : state !== 'visible'
  }

  watch(
    visibility,
    (state) => {
      if (shouldRun(state)) {
        resume()
      } else {
        pause()
      }
    },
    { immediate: true }
  )

  return {
    pause,
    resume,
    visibility,
    isActive,
  }
}