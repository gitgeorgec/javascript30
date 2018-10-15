const moles = document.querySelectorAll(".mole")
const pointShow = document.querySelector(".point")
const starbtn = document.querySelector(".startbtn")
const countdownShow =document.querySelector(".countdown")
let lastUp
let timeup =false
let point = 0;
let countdown
let leftTime = 10

function timefunction(min, max){
    return Math.floor(Math.random()*(max-min)+min)
}

function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length)
    const hole = holes[idx]
    if(lastUp === idx){
        randomHole(holes)
    }else{
        lastUp = idx
    }
    return hole
}

function peep(){
    const time = timefunction(300,1000)
    const hole = randomHole(moles)
    hole.classList.add("up")
    setTimeout(()=>{
        hole.classList.remove("up")
        if(!timeup)peep()
    },time)
}

function gameStart(){
    starbtn.classList.add("hide")
    countdownShow.classList.remove("hide")
    point = 0;
    pointShow.textContent = point
    timeup = false
    peep()
    setTimeout(()=>{
        timeup=true
        leftTime = 10
        clearInterval(countdown)
        starbtn.classList.remove("hide")
        countdownShow.classList.add("hide")
    },10000)
    countdown = setInterval(()=>{
        leftTime--
        countdownShow.textContent = leftTime
    },1000)
}

function bonk(e){
    if(!e.isTrusted) return
    point++
    this.classList.remove("up")
    pointShow.textContent = point
}

moles.forEach(mole=>mole.addEventListener("click",bonk))

starbtn.addEventListener("click", gameStart)