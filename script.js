let modal=document.querySelector(".modal");
let overlay=document.querySelector(".overlay")
const openModal=function(){
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}
const closeModal=function(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}