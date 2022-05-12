// detect button clicks and associate each click with a sound 
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click", function() {
    playSound(btn.textContent);
}))

// detect keyboard clicks
document.addEventListener("keydown", function(evt){
    playSound(evt.key);
})

function playSound(buttonTxtValue) {
    var audio = null;
    switch(buttonTxtValue) {
        case 'w':
            audio = new Audio("./resources/sounds/tom-1.mp3");
            audio.play()
            break;
        
        case 'a':
            audio = new Audio("./resources/sounds/tom-2.mp3");
            audio.play()
            break;
        
        case 's':
            audio = new Audio("./resources/sounds/tom-3.mp3");
            audio.play()
            break;

        case 'd':
            audio = new Audio("./resources/sounds/tom-4.mp3");
            audio.play()
            break;

        case 'j':
            audio = new Audio("./resources/sounds/snare.mp3");
            audio.play()
            break;

        case 'k':
            audio = new Audio("./resources/sounds/crash.mp3");
            audio.play()
            break;

        case 'l':
            audio = new Audio("./resources/sounds/kick-bass.mp3");
            audio.play()
            break;

        default:
            console.log("key does not map to an audio file")
    }
}