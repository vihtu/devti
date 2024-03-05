const btnMobile = document.getElementById("btn-mobile");
const exitBtn = document.querySelector(".exit-btn");

function openMenu(e) {
   if (e.type === 'touchstart') e.preventDefault()
   const nav = document.getElementById("nav");
   nav.classList.add('active');
}
function exitMenu(e) {
   if (e.type === 'touchstart') e.preventDefault()
   const nav = document.getElementById("nav");
   nav.classList.remove('active');
}

btnMobile.addEventListener("click", openMenu);
btnMobile.addEventListener("touchstart", openMenu);
exitBtn.addEventListener("click", exitMenu);
exitBtn.addEventListener("touchstart", exitMenu);