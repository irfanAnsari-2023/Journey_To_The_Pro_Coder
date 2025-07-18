let micBtn = document.querySelector("#mic-btn");
let content = document.querySelector("#content");
let voice = document.querySelector(".voice");


// function which tell the assistant to speak what you want to

function speak(msg){
    let msgToSpeak = new SpeechSynthesisUtterance(msg);
    msgToSpeak.rate = 1;
    msgToSpeak.pitch = 1;
    msgToSpeak.volume = 1;
    msgToSpeak.lang = "hi-GB"
    window.speechSynthesis.speak(msgToSpeak)
}

// speak("Hello, How are you");

function wishMe(){
    let time = new Date();
    // console.log(time.getHours());
    let hours = time.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning");
    }else if(hours>=12 && hours<16){
        speak("good Afternoon");
    }else {
        speak("Good evening")
    }
}

window.addEventListener("load" , ()=>{
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) =>{
    let currIdx = event.resultIndex;
    let transcript = event.results[currIdx][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
    console.log(event);
}

micBtn.addEventListener("click", ()=>{
    recognition.start();
    micBtn.style.display = "none";
    voice.style.display = "block";
})

function takeCommand(msg){
    if(msg.includes("hello") || msg.includes("hey")|| msg.includes("hi")){
        speak("Hello, what can i help with");
    }else if(msg.includes("Who are you")){
        speak("Hey! I'm Cyborg, an AI developed by Irfan Ansari. I'm here to help you with any questions, explain concepts, debug your code, or assist with pretty much anything else you’re working on — which you’ve been exploring a lot lately!.")
    }else if(msg.includes("open Youtube")){
        speak("opening youtube....");
        window.open("https://www.youtube.com/");
    }
    else{
        speak(`This is what i found on internet regarding this ${msg}`)
        window.open(`https://www.google.com/search?q=${msg}`);
    }
}

