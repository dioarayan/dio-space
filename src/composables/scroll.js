// scroll.js (composition function)
import { ref, onMounted } from 'vue';

export default function useScrollToAnchor() {
  const scrollTarget = ref(null);

  function scrollToAnchor() {
    if (scrollTarget.value) {
      scrollTarget.value.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMounted(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollTarget.value = document.getElementById(hash);
    }
  });

  return { scrollTarget, scrollToAnchor };
}
