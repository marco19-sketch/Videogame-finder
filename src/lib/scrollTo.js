//modified to use 'scrollTo'(absolute coordinate) instead of 'scrollBy'(relative coordinate)
export function scrollTo(offset = 400, delay = 50) {
  setTimeout(() => {
    const scrollElement = document.scrollingElement || document.documentElement;
    scrollElement.scrollTo({
      top: offset, // absolute position
      behavior: "smooth",
    });
    
  }, delay);
}
