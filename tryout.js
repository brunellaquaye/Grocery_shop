const btn = document.querySelector("button.menu_icon");
const menu = document.querySelector(".menu-item");
btn.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
})