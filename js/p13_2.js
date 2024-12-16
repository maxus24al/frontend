
const img = document.getElementById('i_logo')

img.addEventListener('mouseover', () =>{
    img.setAttribute("style", "transition: ease 1s; width: 200px; hieght: 200px")
    img.style.transform = "rotate(720deg)"
})
img.addEventListener('mouseleave', () =>{
    img.setAttribute("style", "transition: ease 1s; width: 150px; hieght: 150px")
    img.style.transform = "rotate(-720deg)"
})
img.addEventListener('dblclick', () =>{
    alert("Не так часто, дорогуша!")
})
img.addEventListener('click', () =>{
    img.setAttribute("src", "logos/no.png")
})