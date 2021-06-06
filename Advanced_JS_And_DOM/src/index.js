/* Path to the sounds of the different drum parts */
const soundStore = "./sounds/";
const soundExt = ".mp3";

/* List of drum names */
const drumIds = [
    "w-drum",
    "a-drum",
    "s-drum",
    "d-drum",
    "j-drum",
    "k-drum",
    "l-drum"
];

let audio = null; 

function playAudio(button_id) {
    /* Switch statement that will play the audio belonging to the button clicked */
    switch(button_id) {
        case drumIds[0]:
            audio = new Audio(soundStore + "crash" + soundExt); 
            audio.play()
            break;
        case drumIds[1]:
            audio = new Audio(soundStore + "kick-bass" + soundExt);
            audio.play();
            break; 
        case drumIds[2]:
            audio =  new Audio(soundStore + "snare" + soundExt);
            audio.play();
            break; 
        case drumIds[3]:
            audio = new Audio(soundStore + "tom-1" + soundExt);
            audio.play();
            break; 
        case drumIds[4]:
            audio = new Audio(soundStore + "tom-2" + soundExt);
            audio.play();
            break; 
        case drumIds[5]:
            audio = new Audio(soundStore + "tom-3" + soundExt);
            audio.play();
            break; 
        case drumIds[6]:
            audio = new Audio(soundStore + "tom-4" + soundExt);
            audio.play();
            break; 
        default:
            console.error("No audio available");       
    }
}