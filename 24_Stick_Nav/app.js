const nav = document.querySelector("nav")
const header = document.querySelector('header')
const logo = document.querySelector('.logo')
const section = document.querySelector('section')
function navfix(){
    // console.log("window: ",scrollY)
    // console.log(nav.offsetTop)
    // console.log(header.offsetTop+header.offsetHeight)
    if(scrollY >header.offsetTop+header.offsetHeight){
        nav.classList.add('up')
        section.classList.add('addtop')
    }else {
        nav.classList.remove('up')
        section.classList.remove('addtop')
    }
}


window.addEventListener("scroll", navfix)