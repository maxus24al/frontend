
function showMessage(data){
    console.log(data);
}

function changeBackgroundColor(data){
    addEventListener("DOMContentLoaded", (event) => {

        const back = document.querySelector('body');
        back.setAttribute("style", "background-color:"+data);

    });
}

function toggleVisibility(data){
    addEventListener("DOMContentLoaded", (event) => {
        const n = document.querySelector('nav');

        if(n.style.display == 'none'){
            n.setAttribute("style", "display: flex");
        }
        else{
            n.setAttribute("style", "display: none");
        }
    });
    
}

function logCurrentTime(){
    console.log(new Date());
}

function resetBackgroundColor(){
    addEventListener("DOMContentLoaded", (event) => {

        const back = document.querySelector('body');
        back.setAttribute("style", "background-color: white");

    });
}