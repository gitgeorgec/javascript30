const items = document.querySelectorAll(".item")
const container = document.querySelector(".container")

let down = false
let start
let initScoll
container.addEventListener("mousedown",(e)=>{
    down = true;
    container.classList.add("active")
    start = e.pageX-container.offsetLeft
    initScoll = container.scrollLeft
})

container.addEventListener("mouseup",(e)=>{
    down = false
    container.classList.remove("active")
})

container.addEventListener("mouseleave",()=>{
    down = false
    container.classList.remove(".active")
})

container.addEventListener("mousemove",(e)=>{
    if (!down) return;  
    e.preventDefault()
    distance = (e.pageX-start)*2
    if(down){
        container.scrollLeft = initScoll-distance
    }
})