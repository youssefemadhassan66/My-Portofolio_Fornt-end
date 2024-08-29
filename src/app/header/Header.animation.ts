import Typed from 'typed.js';

export function handleScroll(): void {
  const scrollPosition = window.pageYOffset;
  const image = document.querySelector('.scrolling-image') as HTMLElement;

  if (image) {
    const moveUp = scrollPosition * 0.5;
    image.style.transform = `translate(-50%, calc(-50% - ${moveUp}px))`;
  }
}

export function headerTyping(word: string): void {
  const options = {
    strings: [
      `<span style="color:#fff;">${word}</span>`,
    ],
    typeSpeed: 85,
    backSpeed: 85,
    loop: true,
  };

  const typedElement = document.querySelector('.auto-type');
  if (typedElement) {
    new Typed('.auto-type', options);
  } else {
    console.warn("Element with class 'auto-type' not found.");
  }
}

