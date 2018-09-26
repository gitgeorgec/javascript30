const silderImgs = document.querySelectorAll('img')

function debounce(func, wait=20, immediate = true){
    var timeout;
    return function(){
        var context = this, args= arguments;
        var later = function(){
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout;
        console.log(timeout)
        clearTimeout(timeout)
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args)
    }
}

// function debounce(func, delay=200) {
//     var timer = null;
//     return function () {
//       var context = this;
//       var args = arguments;
//       clearTimeout(timer);
//       console.log(timer)
//       timer = setTimeout(function () {
//         func.apply(context, args)
//       }, delay);
//     }
//   }

function handleScroll(e){
    silderImgs.forEach(img=>{
        const silderInAt = (window.scrollY + window.innerHeight) - img.height/2
        const ImgBottom = img.offsetTop + img.height
        const isHalfShown = silderInAt > img.offsetTop
        const isNotScrolledPast = window.scrollY < ImgBottom
        if(isHalfShown && isNotScrolledPast){
            img.classList.add("active")
        } else {
            img.classList.remove("active")
        }
    })
    console.log("active")
}

window.addEventListener("scroll" , debounce(handleScroll))