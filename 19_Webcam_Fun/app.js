const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');
const video = document.querySelector("video")
const snapshoot = document.querySelector(".snapshoot")
const snapsound = document.querySelector(".snapsound")
const redEffectbutton = document.querySelector(".redEffect")
const rgbSplitbutton = document.querySelector(".rgbSplit")
const greenScreenbutton = document.querySelector(".greenScreen")
const resetbutton = document.querySelector(".reset")

function getVideo(){
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(mediastream => {
        video.srcObject = mediastream
        video.play();
    })
    .catch((err)=>console.log(err.name + ": " + err.message))
}

let filter = 0
redEffectbutton.addEventListener("click", ()=>filter=1)
rgbSplitbutton.addEventListener("click", ()=>filter=2)
greenScreenbutton.addEventListener("click", ()=>filter=3)
resetbutton.addEventListener("click", ()=>filter=0)

function paintToCanvas(){
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height
    let paint = video    
    video.width = 0
    video.height = 0
    return setInterval(()=>{
        ctx.drawImage(paint, 0, 0, width, height)
        let pixels = ctx.getImageData(0, 0, width, height)
        if(filter === 1){
            pixels = redEffect(pixels)
            console.log(filter)
        }
        if(filter === 2){
            pixels = rgbSplit(pixels)
        }
        if(filter === 3){
            pixels = greenScreen(pixels)
        }
        if(filter === 0){
            pixels = pixels
        }
        // pixels = redEffect(pixels)
        // pixels = rgbSplit(pixels)
        // ctx.globalAlpha = 0.1;
        // greenScreen(pixels)
        ctx.putImageData(pixels, 0, 0);
    }, 32)
}

function getsnapshoot(){
    snapsound.currentTime = 0
    snapsound.play()
    const snapimg = canvas.toDataURL('image/jpeg');
    const snapdownload = document.createElement("a")
    snapdownload.href = snapimg
    snapdownload.setAttribute('download', 'picture')
    snapdownload.innerHTML = `<img src=${snapimg} >`
    snapshoot.insertBefore(snapdownload,snapshoot.firstChild)
}

function redEffect(pixels){
    for(let i =0; i <pixels.data.length; i+=4){
        pixels.data[i+0] = pixels.data[i+0] + 100 //red
        pixels.data[i+1] = pixels.data[i+1] - 100 //green
        pixels.data[i+2] = pixels.data[i+2] * 0.5 //blue
    }
    return pixels
}

function rgbSplit(pixels){
    for(let i =0; i <pixels.data.length; i+=4){
        pixels.data[i-150] = pixels.data[i+0]
        pixels.data[i+500] = pixels.data[i+1]
        pixels.data[i-250] = pixels.data[i+2]
    }
    return pixels
}

function greenScreen(pixels) {
    for (i = 0; i < pixels.data.length; i = i + 4) {
        if(pixels.data[i + 0] > 120) pixels.data[i + 3] = 0;
        // if(pixels.data[i + 1] > 50) pixels.data[i + 3] = 0;
        // if(pixels.data[i + 2] > 50) pixels.data[i + 3] = 0;
    }
    return pixels;
  }

getVideo()
video.addEventListener("canplay", paintToCanvas)