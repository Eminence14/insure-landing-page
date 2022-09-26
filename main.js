const navbar = document.querySelector('nav')
const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')

hamburger.addEventListener('click', display)
close.addEventListener('click', display)

function display() {
    navbar.classList.toggle('active')
    close.classList.toggle('active')
    hamburger.classList.toggle('active')
}