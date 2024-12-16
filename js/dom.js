
const H1 = document.querySelector('h1');

H1.textContent = "Добро пожаловать на наш сайт!";

const H2 = document.querySelector('h2');

H2.setAttribute("style", "color: red;");


const P = document.querySelector('p');

P.textContent = "Это новый текст параграфа";

const video = document.querySelectorAll('video')

video.forEach(el => {
    el.style.display = 'none';
});