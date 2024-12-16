
const text = document.querySelectorAll('h1');

text.forEach(el => {
    el.addEventListener('click', () =>{
        alert("Вы кликнули на заголовок!");
    })
});

const button = document.getElementById('btn_table');

button.addEventListener('click', () => {
    const table = document.querySelector('#f_table');
    const cell = table.querySelectorAll('td');

    console.log(cell)

    new_table = [
        "s", "Базовое бэкенд-приложение", "s", "s", 
        "s", "HTTP-запросы", "s", "s", 
        "s", "JSON и работа с ним", "s", "s", 
        "s", "HTTP-ответы", "s", "s", 
        "s", "Проектирование API", "s", "s", 
        "s", "Роутинг и его настройка", "s", "s", 
        "s", "NoSQL базы данных", "s", "s", 
        "s", "Обеспечение авторизации и доступа пользователей", "s", "s", 
        "s", "Работа сторонних сервисов уведомления и авторизации", "s", "s", 
        "s", "Основы ReactJS", "s", "s", 
        "s", "Работа с компонентами динамической DOM", "s", "s", 
        "s", "Использование хуков в React", "s", "s", 
        "s", "Основы микросервисной архитектуры", "s", "s", 
        "s", "Разработка классических модулей веб-приложений", "s", "s", 
        "s", "Разработка классических модулей веб-приложений", "s", "s",
        "s", "Разработка классических модулей веб-приложений", "s", "s"
    ];

    for(i = 1; i < cell.length; i+=4){
        cell[i].textContent = new_table[i];
    }
})

