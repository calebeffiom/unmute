const textarea = document.querySelector("textarea"),
speechBtn = document.querySelector("button");

function textTospeech(text){
    let utterance= new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

speechBtn.addEventListener("click",e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        textTospeech(textarea.value);
    }
});