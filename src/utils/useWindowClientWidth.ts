import { ref, Ref, onMounted, onUnmounted } from "vue";

export function useWindowClientWidth() {
  const width = ref<Ref<number>>(null);

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
