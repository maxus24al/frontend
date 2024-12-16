class FormData {
    name;
    email;
    phone;
    date;
    comment;

    formPrint() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`); 
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
}


let formDataInstance = new FormData();

const form_M = document.getElementById("modal");
const P = document.querySelectorAll("p")[2];

console.log(P.textContent);

form_M.addEventListener("submit", function(event){
    event.preventDefault();

    const name = form_M.elements["name"].value;
    const email = form_M.elements["email"].value;
    const phone = form_M.elements["phon"].value;
    const date = form_M.elements["date"].value;
    const comment = form_M.elements["comments"].value;
    
    if(name != null) formDataInstance.name = name;
    if(comment != null) formDataInstance.comment = comment;

    let emailReg = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");
    if(email != null && emailReg.test(email)) {
        formDataInstance.email = email;
    }

    let telReg = new RegExp("^\\+7-\\d{3}-\\d{3}-\\d{2}-\\d{2}$");
    if(phone != null && telReg.test(phone)) { 
        formDataInstance.phone = phone;
    }

    formDataInstance.date = date;

    formDataInstance.formPrint();
});
