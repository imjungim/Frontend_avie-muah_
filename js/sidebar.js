const menuBtn = document.querySelector('.header .header-section .menu-button')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const logoColor = document.querySelector('.logo-image img')

function sidebarOpen() {
  menuBtn.classList.toggle('is-active')
  sidebar.classList.toggle('is-active')
  overlay.classList.toggle('is-active')
  logoColor.classList.toggle('logo-color')
}

function closeSidebar() {
  menuBtn.classList.remove('is-active')
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
  logoColor.classList.remove('logo-color')
}

menuBtn.addEventListener('click', sidebarOpen)

overlay.addEventListener('click', closeSidebar)
