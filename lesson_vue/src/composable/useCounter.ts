import { ref } from 'vue'

export function useCounter(initValue = 0) {
  const count = ref(initValue)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return {
    count,
    increment,
    decrement,
  }
}
