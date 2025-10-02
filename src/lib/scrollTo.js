export function scrollTo(offset = 400, delay = 50) {
  setTimeout(() => {
    // window.scrollBy({
    // document.body.scrollBy({
      const scrollElement =
        document.scrollingElement || document.documentElement;
      scrollElement.scrollBy({
        top: offset,
        behavior: "smooth",
      });
      console.log('scroll completed', Date.now() / 1000);
  }, delay);
}
