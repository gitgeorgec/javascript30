const links = document.querySelectorAll("a")

const Trace = document.createElement("span")
Trace.classList.add("hightlight")
document.body.appendChild(Trace)

function hightlight (){
    const position = this.getBoundingClientRect()
    const coords = {
        width: position.width,
        height: position.height,
        top: position.top + window.scrollY,
        left: position.left + window.scrollX
    }
    console.log(position)
    Trace.style.background = "white"
    Trace.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    Trace.style.width = `${coords.width}px`
    Trace.style.height = `${coords.height}px`
    }

links.forEach(link=>{
    link.addEventListener("mouseover",hightlight)
})
