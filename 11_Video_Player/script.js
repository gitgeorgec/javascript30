const player = document.querySelector(".player")
const video = player.querySelector(".player_video")
const progress = player.querySelector(".progress")
const progressBar = player.querySelector(".progress_filled")
const toggle = player.querySelector(".toggle")
const skipButtons = player.querySelectorAll(".player_button")
const ranges = player.querySelectorAll(".player_silder")
const fullscreen = player.querySelector(".full_screen")

function togglePlay(){
    video.paused?video.play():video.pause()
}

function updateButton(){
    video.paused?toggle.innerText="Stop":toggle.innerText="Play"
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name]=this.value
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

function toggleScreen(){
    if(!document.webkitFullscreenElement){
        player.webkitRequestFullscreen()
    } else {
        document.webkitCancelFullScreen()
    }
}

let mousedown = false

toggle.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)

skipButtons.forEach(skipbutton=>skipbutton.addEventListener("click", skip))

ranges.forEach(range=>range.addEventListener("change", handleRangeUpdate))

video.addEventListener("timeupdate", handleProgress)

progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", (e)=> mousedown && scrub(e))
progress.addEventListener("mousedown", ()=>mousedown=true)
progress.addEventListener("mouseup", ()=>mousedown=false)
fullscreen.addEventListener("click", toggleScreen)



