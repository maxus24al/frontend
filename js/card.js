
// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const serv1 = document.getElementById("serv1");
const serv2 = document.getElementById("serv2");
const serv3 = document.getElementById("serv3");
const name_serv = document.getElementById("nserv");
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const btn3 = document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
// Открываем модальное окно при нажатии на кнопку

btn1.onclick = function() {
    modal.style.display = "block";
    name_serv.textContent = serv1.textContent;
}

btn2.onclick = function() {
    modal.style.display = "block";
    name_serv.textContent = serv2.textContent;
}

btn3.onclick = function() {
    modal.style.display = "block";
    name_serv.textContent = serv3.textContent;
}

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
    name_serv.textContent = "";
}


// Валидация формы и обработка отправки
