new Swiper('.slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

new Swiper('.slider-2', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

new Swiper('.slider-3', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const burgerButtonOpen = document.getElementById('header-menu__button-open')
const burgerMenu = document.getElementById('header-menu__burger-open')
const burgerButtonClose = document.getElementById('header-menu__button-close')

burgerButtonOpen.addEventListener('click', () => {
  burgerMenu.classList.add('active')
})

burgerButtonClose.addEventListener('click', () => {
  burgerMenu.classList.remove('active')
})

const callMenuOpen = document.getElementById('call-menu-open')
const callMenuOpenSecond = document.getElementById('call-menu-open-1')
const callMenu = document.getElementById('container-aside-bar')
const callMenuClose = document.getElementById('aside-bar__button-close')

callMenuOpen.addEventListener('click', () => {
  callMenu.classList.add('active'), burgerMenu.classList.remove('active')
})

callMenuOpenSecond.addEventListener('click', () => {
  callMenu.classList.add('active')
})

callMenuClose.addEventListener('click', () => {
  callMenu.classList.remove('active')
})

const chatMenuOpenFirst = document.getElementById('chatMenuOpen-first')
const chatMenuOpenSecont = document.getElementById('chatMenuOpen-second')
const chatMenu = document.getElementById('container-aside-bar-call')
const chatMenuClose = document.getElementById('aside-bar-call__button-close')

chatMenuOpenFirst.addEventListener('click', () => {
  chatMenu.classList.add('active'), burgerMenu.classList.remove('active')
})

chatMenuOpenSecont.addEventListener('click', () => {
  chatMenu.classList.add('active')
})

chatMenuClose.addEventListener('click', () => {
  chatMenu.classList.remove('active')
})
