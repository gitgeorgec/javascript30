const msg = new SpeechSynthesisUtterance()

let voices =[]
const voicesDropdown = document.querySelector("select[name=lang]")
const textinput = document.querySelector("textarea[name=text]")
const rateinput = document.querySelector("input[name=rate]")
const pitchinput = document.querySelector("input[name=pitch]")
const speaktbn = document.querySelector("#speak")
const stopbtn = document.querySelector("#stop")


function populateVoices(){
    voices = speechSynthesis.getVoices()
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value=${voice.name}>${voice.name}(${voice.lang})</option>`).join("")
    if(voicesDropdown.innerHTML){
        clearInterval(call)
    }
}

function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value)
}

function speakmsg(){
    msg.text = textinput.value
    speechSynthesis.speak(msg)
}

function stopSpeak(){
    speechSynthesis.cancel(msg);
}

function setRate(){
    msg.rate = this.value
}

function setPitch(){
    msg.pitch = this.value
}

const call = setInterval(function(){
    if(voicesDropdown.innerHTML==""){
        populateVoices()
    }
},100)

// speechSynthesis.addEventListener("voiceschanged", populateVoices) Safari not suppport

voicesDropdown.addEventListener('change', setVoice)
speaktbn.addEventListener("click", speakmsg)
stopbtn.addEventListener("click", stopSpeak)
rateinput.addEventListener("change", setRate)
pitchinput.addEventListener("change", setPitch)
