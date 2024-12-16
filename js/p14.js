
const texts = document.querySelectorAll('h1');

texts.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.setAttribute("style", "transition: ease 1s; font-size: 80px");
    })
    
    text.addEventListener('mouseleave', () => {
        text.setAttribute("style", "transition: ease 1s; font-size: 40px");
    })
});

const p_texts = document.querySelectorAll('p');
t = 0;

p_texts.forEach(p => {
    p.addEventListener('click', () => {
        if(t%2 == 0) {p.setAttribute("style", "transition: ease 1s; background-color: lightblue");}
        else p.setAttribute("style", "transition: ease 1s; background-color: none");
        t = (t + 1)%2;
    })
    
});

const table = document.getElementById("f_table");

t2 = 0;

const button_table = document.getElementById('btn_table2');

button_table.addEventListener('click', () => {

    if(t2%2 == 0) {
        table.setAttribute("style", "transition: ease 1s; opacity: 0;");
        setTimeout(() => {table.setAttribute("style", "display: none;")}, 1000); 
        
        
    }
    else {
        table.setAttribute("style", "display: block;");
        table.setAttribute("style", "opacity: 0;");
        setTimeout(() => {table.setAttribute("style", "transition: ease 1s; opacity: 100;");}, 1); 
        
    }
    t2 = (t2 + 1)%2;
    
})

