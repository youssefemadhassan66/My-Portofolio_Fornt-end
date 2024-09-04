import Typed from 'typed.js';

export function handleScroll(): void {
  const scrollPosition = window.pageYOffset;
  const image = document.querySelector('.scrolling-image') as HTMLElement;

  if (image) {
    const moveUp = scrollPosition * 0.5;
    image.style.transform = `translate(-50%, calc(-50% - ${moveUp}px))`;
  }
}

export function headerTyping(word: string[]): void {
  const typedElement = document.querySelector('.auto-type');

  if (typedElement) {

    typedElement.classList.add('typing-active');

    const options = {
      strings: word,
      typeSpeed: 90,
      backSpeed: 90,
      showCursor: false,
    };

    new Typed('.auto-type', options);
  } else {
    console.warn("Element with class 'auto-type' not found.");
  }
}
