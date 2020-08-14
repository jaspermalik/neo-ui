import { ref, onMounted, onUnmounted } from "vue";

export function useWindowClientWidth() {
  const width = ref<number>(document.documentElement.clientWidth);

  function handleResize() {
    width.value = document.documentElement.clientWidth;
  }

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    width,
  };
}
