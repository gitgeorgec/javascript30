const shadow = document.querySelector("div")
const word = document.querySelector("h1")


function shadowEffect(e){
    const width = shadow.offsetWidth
    const height = shadow.offsetHeight
    let x = e.offsetX
    let y = e.offsetY

    if(this !== e.target){
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }
    walkx = Math.floor((x - width/2)/50)
    walky = Math.floor((y - height/2)/50)
    word.style.textShadow = `${-walkx}px ${-walky}px 0 rgba(0,0,0, 0.6)`
}



shadow.addEventListener("mousemove", shadowEffect)