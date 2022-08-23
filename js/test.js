var works = document.querySelector('#works')
var contact = document.querySelector('#contact')
var progerss

document.addEventListener('scroll', function () {
    if (window.pageYOffset < works.offsetTop) {
        progerss = 1
    } else if (window.pageYOffset > contact.offsetTop) {
        progerss = 0
        works.classList.remove('sticky')
    } else if (window.pageYOffset < contact.offsetTop) {
        progerss = (contact.offsetTop - works.offsetTop) / (window.innerHeight * 4)
        works.classList.add('sticky')
    } else {
        progerss = (contact.offsetTop - works.offsetTop) / (window.innerHeight * 4)
    }
    let position = (works.scrollWidth - window.innerWidth) * progerss
    works.scrollTo({ left: position })

    console.log(works.offsetTop)
    console.log(window.pageYOffset)
    console.log(progerss)
})
