// DESKTOP 검색창 제어

const searchEl = document.querySelector('.search')
const searchInputEl = document.querySelector('.search-form input')
const gnbSearchEl = document.querySelector('.gnb-search')
const searchOverayEl = document.querySelector('.search-overay')
const closeEl = document.querySelector('.close-icon')
const adKeywordsEl = document.querySelector('.ad-keywords')

searchEl.addEventListener('click', () => {
  gnbSearchEl.classList.toggle('show')
  searchOverayEl.classList.toggle('show')
  adKeywordsEl.classList.remove('show')
})

closeEl.addEventListener('click', () => {
  gnbSearchEl.classList.remove('show')
  searchOverayEl.classList.remove('show')
  adKeywordsEl.classList.remove('show')
})

searchInputEl.addEventListener('focus', () => {
  adKeywordsEl.classList.add('show')
})

//  TABLET, MOBILE 메뉴 제어

const mobileMenuIconEl = document.querySelector('.m-menu')
const mobileSearchEl = document.querySelector('.m-search')
const mobileSchOvrEl = document.querySelector('.m-search-overay')
const mobileMenuEl = document.querySelector('.mobile-menu')
const mobileCloseEl = document.querySelector('.background-close')

mobileMenuIconEl.addEventListener('click', () => {
  mobileMenuEl.classList.toggle('show')
  mobileSchOvrEl.classList.toggle('show')
  mobileCloseEl.classList.toggle('show')
})

mobileCloseEl.addEventListener('click', () => {
  mobileMenuEl.classList.remove('show')
  mobileSchOvrEl.classList.remove('show')
  mobileCloseEl.classList.remove('show')
})

mobileSearchEl.addEventListener('click', () => {
  gnbSearchEl.classList.toggle('show')
  searchOverayEl.classList.toggle('show')
  adKeywordsEl.classList.remove('show')
})

// tablet main 
const tabletFirstEl = document.querySelector('.t-inner .first')
const tabletSecondEl = document.querySelector('.t-inner .second')

const tabletMain = setInterval(() => {
  tabletFirstEl.classList.toggle('hide')
  tabletSecondEl.classList.toggle('show')
}, 3000);
