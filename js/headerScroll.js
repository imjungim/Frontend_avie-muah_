const header = document.querySelector('.header');
console.log(header)

window.addEventListener('scroll', function headerScroll() {
  const scroll = window.scrollY
  if (scroll > 100) {
    header.classList.add('on-background')
  }
})