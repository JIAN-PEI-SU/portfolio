// header固定
var header = document.querySelector('header')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
        header.classList.add('blur')
    } else {
        header.classList.remove('blur')
    }
})

// 漢堡選單點擊
var hamburger = document.querySelector('.hamburger')
var nav = document.querySelector('nav')
var mask = document.querySelector('.header-mask')
var body = document.querySelector('body')

function navClick() {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        mask.classList.add('active')
        body.style.overflow = 'hidden'
    } else {
        body.removeAttribute('style')
        mask.classList.remove('active')
    }
}

hamburger.addEventListener('click', function () {
    navClick()
})

mask.addEventListener('click', function () {
    navClick()
})

//作品集捲動
var works = document.querySelector('#works')
var nothing = document.querySelector('#nothing')
var progerss

document.addEventListener('scroll', function () {
    if (window.pageYOffset < nothing.offsetTop) {
        progerss = 0
    } else if (window.pageYOffset > nothing.offsetTop + window.innerHeight * 4) {
        progerss = 1
        works.classList.remove('sticky')
    } else {
        works.classList.add('sticky')
        progerss = (window.pageYOffset - nothing.offsetTop) / (window.innerHeight * 4)
    }
    // console.log(window.pageYOffset)
    // console.log(works.offsetTop)
    // console.log(progerss)
    let position = (works.scrollWidth - window.innerWidth) * progerss
    works.scrollTo({ left: position })
})

// TOP鍵
var goTop = document.querySelector('#goTop')

goTop.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

// 錨點
var navBtnAbout = document.querySelector('.nav-btn.about')
var navBtnSkills = document.querySelector('.nav-btn.skills')
var navBtnWorks = document.querySelector('.nav-btn.works')
var navBtnPortfolio = document.querySelector('.nav-btn.portfolio')

navBtnAbout.addEventListener('click', function () {
    navClick()
    window.scrollTo(0, about.offsetTop - 100)
})
navBtnSkills.addEventListener('click', function () {
    navClick()
    window.scrollTo(0, skills.offsetTop - 100)
})
navBtnWorks.addEventListener('click', function () {
    navClick()
    window.scrollTo(0, nothing.offsetTop - 100)
})
navBtnPortfolio.addEventListener('click', function () {
    navClick()
    window.scrollTo(0, portfolio.offsetTop - 100)
})
