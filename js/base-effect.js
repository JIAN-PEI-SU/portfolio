var callback = function () {
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

    // 錨點
    var navBtn = document.querySelectorAll('.nav-btn')

    navBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            navClick()
            attr = this.attributes['data-link'].value
            var link = document.getElementById(attr)
            window.scrollTo(0, link.offsetTop - 100)
        })
    })

    //作品集捲動
    var works = document.querySelector('#works')
    var nothing = document.querySelector('#nothing')
    var progerss

    document.addEventListener('scroll', function () {
        if (window.pageYOffset < nothing.offsetTop) {
            progerss = 0
        } else if (window.pageYOffset > nothing.offsetTop + window.innerHeight * 5) {
            progerss = 1
            works.classList.remove('sticky')
        } else {
            works.classList.add('sticky')
            progerss = (window.pageYOffset - nothing.offsetTop) / (window.innerHeight * 5)
        }

        let position = (works.scrollWidth - window.innerWidth) * progerss
        works.scrollTo({ left: position })
    })

    //  Swiper
    var productSwiper = new Swiper('.swiper', {
        spaceBetween: 16,
        slidesPerView: 1.5,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        slidesPerGroup: 1,
        grabCursor: true,
        loop: true,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            420: {
                slidesPerView: 2.5,
            },
            1180: {
                slidesPerView: 3.5,
            },
            2501: {
                slidesPerView: 4.5,
            },
        },
    })

    // TOP鍵
    var goTop = document.querySelector('#goTop')

    goTop.addEventListener('click', function () {
        window.scrollTo(0, 0)
    })

    // popup
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    callback()
} else {
    document.addEventListener('DOMContentLoaded', callback)
}
