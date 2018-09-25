const body = document.querySelector('body')
const title = document.querySelector('#color')
const picture = document.querySelector("#picture")
const secreatkey = "change"
const typein =[]

function handlePicChange(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (request){
            if(!request.ok){
                throw Error(request.status)
            }
            return request
        })
        .then(function(res){
            return res.json()
        })
        .then(function (data){
            picture.src = data.message
            return 
        })
        .catch(function(error){
            return console.log(error)
        })
}

window.addEventListener("keyup",function(e){
    typein.push(e.key)
    typein.splice(-secreatkey.length-1, typein.length - secreatkey.length)
    if(typein.join("") === secreatkey){
        let color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        body.style.background = color
        title.innerText = color
        handlePicChange()
    }
})