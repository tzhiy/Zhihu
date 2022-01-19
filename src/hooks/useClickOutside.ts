import { onMounted, onUnmounted, ref, Ref } from "vue";

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      // 如果点击的 DOM 是 dropdown 的后代则不关闭下拉框，否则关闭
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      }
      else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
  return isClickOutside;
}

export default useClickOutside;
