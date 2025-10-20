export function scrollToMax(delay = 50) {
  setTimeout(() => {
    const scrollElement = document.scrollingElement || document.documentElement;
    const maxScroll = scrollElement.scrollHeight - window.innerHeight;

    scrollElement.scrollTo({
      top: maxScroll,
      behavior: "smooth",
    });

    console.log("scroll started to max:", maxScroll);
  }, delay);
}
