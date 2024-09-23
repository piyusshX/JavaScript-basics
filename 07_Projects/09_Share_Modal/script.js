const modal = document.getElementById("modal")
const overlay = document.querySelector(".overlay")
const cross = document.querySelector(".cross")
const share = document.querySelector(".share")

function closeModal(){
    modal.style.scale = 0
    overlay.style.opacity = 0
    overlay.style.zIndex = -1
}

function openModal(){
    modal.style.scale = 1
    overlay.style.opacity = 1
    overlay.style.zIndex = 2
}

share.addEventListener('click', openModal)
cross.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)