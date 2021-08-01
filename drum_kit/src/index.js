/* Locate the filepath to where the sounds are stored */
let file_path = "./sounds/";
let file_ext = ".mp3";

/* Defining an array of pieces in a drum set */
let drum_set_labels = ["crash", "kick", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
let total_equipment = 7;

/* 
Dictionary <String, Audio> that will map an equipment's name to an audio file to 
be played when a button is clicked or a key is pressed
*/
let equipment_audio_mapper = {};

/* Load all sounds upon opening the webpage */
function load_sounds() {
    for(let i = 0; i < total_equipment; i++) {
        let equipment_name = drum_set_labels[i];
        equipment_audio_mapper[equipment_name] = new Audio(file_path + equipment_name + file_ext);
    }
}

/* Play the sound depending on the button clicked or key pressed */
function play_sound(sound) {
    var sound = equipment_audio_mapper[sound];
    sound.play();
}   

/* 
Adding an event listener to each button.

The event listener will detect whether a particular button has been pressed 
or a certain key has been clicked and play the appropriate sound accordingly.
*/
function attach_listeners() {
    /* Iterate through the keys of the mapper and obtain the keys' value */
    for(const[key, value] of Object.entries(equipment_audio_mapper)) {
        document.getElementsByName(key).addEventListener("click", function(){
            play_sound(key);
        })
    }
}