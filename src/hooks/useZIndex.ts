import { ref, computed } from "vue";

const zIndex = ref(0);
const useZIndex = (initialValue = 2000) => {
  const initialZIndex = ref(initialValue);
  const currentIndex = computed(() => zIndex.value + initialZIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentIndex.value;
  };
  return {
    initialZIndex,
    currentIndex,
    nextZIndex,
  };
};

export default useZIndex;
