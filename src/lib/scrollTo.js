//modified to use 'scrollTo'(absolute coordinate) instead of 'scrollBy'(relative coordinate)
export function scrollTo(offset = 400, delay = 50) {
  setTimeout(() => {
    const scrollElement = document.scrollingElement || document.documentElement;
    scrollElement.scrollTo({
      top: offset, // absolute position
      behavior: "smooth",
    });
    console.log("scroll completed", Date.now() / 1000);
    console.log('scroll height reached', window.scrollY)
  }, delay);
}
