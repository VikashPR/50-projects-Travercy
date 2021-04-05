const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click' , () =>
{
    nav.forEach(nav_E => nav_E.classList.add("visible"));
});
close_btn.addEventListener("click" , () =>
{
    nav.forEach(nav_E => nav_E.classList.remove("visible"))
});
