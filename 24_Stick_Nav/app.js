const nav = document.querySelector("nav")

function navfix(){
    console.log("window: ",scrollY)
    console.log(nav.offsetTop)
    if(nav.offsetTop === scrollY){
        
    }
}


window.addEventListener("scroll", navfix)