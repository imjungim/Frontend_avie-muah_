const menuBtn = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
console.log(overlay)

menuBtn.addEventListener('click', function sidebarOpen() {
  menuBtn.classList.toggle('is-active')
  sidebar.classList.toggle('is-active')
  overlay.classList.toggle('is-active')
})

overlay.addEventListener('click', function closeSidebar() {
  menuBtn.classList.remove('is-active')
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
})