import Typed from 'typed.js';

  export function handleScroll(): void {
    const scrollPosition = window.pageYOffset;
    const image = document.querySelector('.scrolling-image') as HTMLElement;

    if (image) {
      const moveUp = scrollPosition * 0.5;
      image.style.transform = `translate(-50%, calc(-50% - ${moveUp}px))`;
    }
  }

  export function headerTyping(){
    const options = {
      strings: [
        '<span style="color:#05EEFF;">Cyber Security </span>',
        '<span style="color:#05EEFF;">Developing </span>',
        '<span style="color:#05EEFF;">Networking</span>',
        '<span style="color:#05EEFF;">DevOps</span>',
        '<span style="color:#05EEFF;">Daily Driver</span>'
      ],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true
    };


    const typed = new Typed('.auto-type', options);
  }

  
