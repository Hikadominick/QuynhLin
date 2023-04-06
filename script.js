

function toggle() {
    var toggles = document.querySelector("#main");
    toggles.classList.toggle('dark');
}


var overlay = document.querySelector('#overlay')
var closeBTn = document.querySelector('#close')
var openBtn = document.querySelector('#open')
var openMenu = document.querySelector('#menu')
var displayBody = document.querySelector('#bodi')
var displayUlli = document.querySelector('#ulli')

function openMenus () {
    overlay.style.display = "block";
    closeBTn.style.display = "block";
    displayBody.style.display = "none";
    displayUlli.style.display = "none";
    openBtn.style.display = "none";
}

function closeMenus () {
    overlay.style.display = "none";
    displayBody.style.display = "block";
    displayUlli.style.display = "flex";
    openBtn.style.display = "block";
}