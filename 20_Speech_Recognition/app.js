const container = document.querySelector(".container")

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true
recognition.lang = "en-US"

// recognition.addEventListener("result",(e)=>{
//     let sentence = e.results[0][0].transcript
//     let p = document.createElement("p")
//     p.innerHTML = sentence
//     container.appendChild(p)
// })
let p = document.createElement("p")
container.appendChild(p)

recognition.addEventListener("result",e=>{
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("")
        
    p.textContent = transcript
    
    if(e.results[0].isFinal){
        if(transcript.includes("say hello")){
        alert("hello")
        }
        p = document.createElement("p")
        container.appendChild(p);
    }
})

recognition.addEventListener("end",recognition.start)

recognition.start()