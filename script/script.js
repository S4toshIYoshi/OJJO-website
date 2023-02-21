const burger = document.querySelector('.nav__burger-mobile')
const burgerMenu = document.querySelector('.nav__mobile-menu')
const body = document.querySelector('body')

const mobileFilterButton = document.querySelector('.mobile-spoiler__filter')
const filterMobile = document.querySelector('.filter__drop-menu')
const mobileSpoiler = document.querySelector('.category__mobile-spoiler')

const footerBody = document.querySelector('.footer__body')
const footerBuy = document.querySelector('.footer__buy')
const footerFeedback = document.querySelector('.footer__feedback')
const footerSocial = document.querySelector('.footer__social')

function addClassMenu () {
    burger.classList.toggle('active-mobile')
    burgerMenu.classList.toggle('active-mobile')
    body.classList.toggle('lock')
}

function addActiveFilter (event) {
    if (event.target.closest('.mobile-spoiler__filter')){
        filterMobile.classList.toggle('active')
    }        
    if (!event.target.closest('.category__mobile-spoiler')){
        filterMobile.classList.remove('active')
    }
}

function addFooterActiveOne (event) {
    if (event.target.closest('.one')) {
        footerBody.classList.toggle('footer_active')
    }
    if (!event.target.closest('.one')){
        footerBody.classList.remove('footer_active')
    }
}

function addFooterActiveTwo (event) {
    if (event.target.closest('.two')) {
        footerBuy.classList.toggle('footer_active')
    }
    if (!event.target.closest('.two')){
        footerBuy.classList.remove('footer_active')
    }
}

function addFooterActiveThree (event) {
    if (event.target.closest('.three')) {
        footerFeedback.classList.toggle('footer_active')
    }
    if (!event.target.closest('.three')){
        footerFeedback.classList.remove('footer_active')
    }
}

function addFooterActiveFour (event) {
    if (event.target.closest('.four')) {
        footerSocial.classList.toggle('footer_active')
    }
    if (!event.target.closest('.four')){
        footerSocial.classList.remove('footer_active')
    }
}



burger.addEventListener("click", addClassMenu)

document.addEventListener("click", addActiveFilter)

document.addEventListener("click", addFooterActiveOne)
document.addEventListener("click", addFooterActiveTwo)
document.addEventListener("click", addFooterActiveThree)
document.addEventListener("click", addFooterActiveFour)