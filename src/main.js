import { createHeader } from './components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const header = createHeader();
    app.appendChild(header);
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
