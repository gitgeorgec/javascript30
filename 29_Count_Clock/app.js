let countdown = setInterval(()=>{},10000)
const timerDisplay = document.querySelector(".timerDisplay")
const endTime = document.querySelector(".endTime")
const setTimers = document.querySelectorAll("li")


function timer(seconds){
    clearInterval(countdown);
    const now = Date.now()
    const then = now + seconds*1000
    let time = (then - now)/1000
    displayTimeLeft(time)
    displayEndTime(then)
    countdown = setInterval(()=>{
        if(time > 0){
            time--
            displayTimeLeft(time) 
        } else {
            document.body.classList.add("warning")
            clearInterval(countdown)
            return
        } 
    }, 1000)
}

function displayTimeLeft(seconds){
    const mins = Math.floor(seconds/60)
    const hours = Math.floor(mins/60)
    const leftsecond = seconds%60
    const leftmis = mins%60
    const display = `${hours>9?hours:"0"+hours}:${leftmis>9?leftmis:"0"+leftmis}:${leftsecond>9?leftsecond:"0"+leftsecond}`
    timerDisplay.textContent = display
}

function displayEndTime(timestamp){
    const end = new Date(timestamp)
    const hours = end.getHours()
    const mins = end.getMinutes()
    const seconds = end.getSeconds()
    endTime.textContent = `Be back at ${hours>9?hours:"0"+hours}:${mins>9?mins:"0"+mins}:${seconds>9?seconds:"0"+seconds}`
}

setTimers.forEach(setTime=>setTime.addEventListener("click",function(){
    timer(parseInt(this.dataset.time))
}))

document.inputForm.addEventListener("submit",function(e){
    e.preventDefault()
    mins = this.time.value
    timer(mins*60)
    this.reset()
})