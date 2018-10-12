const bar = document.querySelector('.bar')
const video = document.querySelector('video')
const height = document.querySelector('.height')

function handlemove(e){
    const heightY = e.pageY - bar.offsetTop
    const max = 4
    const min = 0.4
    const percent = heightY/this.offsetHeight
    const rate = (Math.round(percent*100)/100*(max-min)+min).toFixed(2)
    height.style.height = `${heightY}px`;
    height.style.lineHeight = `${heightY}px`;
    height.textContent = rate + 'x'
    video.playbackRate = rate
}

bar.addEventListener("mousemove",handlemove)