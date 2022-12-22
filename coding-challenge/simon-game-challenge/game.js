// A function to start the game once any key is pressed
document.addEventListener("keypress", launchGame);

// Global constant variables
let level = 0;
const MAX_LEVEL = 3;
const BETWEENN_LEVEL_REST_WAIT_TIME = 2000; // 2 second wait time
const MEMORIZE_THE_PATTERN_WAIT_TIME = 1000; // 1 second preparation to memorize the pattern
let isGameOver = false;

function launchGame() {
    while(!isGameOver) {
        level += 1;
        // present the current level
        $('#level-title').html('LEVEL ' + level);

        setTimeout(() => {$('#level-title').html('MEMORIZE THE PATTERN')}, BETWEENN_LEVEL_REST_WAIT_TIME);
        
        // generate a random pattern which increases in difficulty based on the level
        // the higher the level the more buttons the user has to select
        generatePattern(level);

        isGameOver = true;    
    }
}

function getAllButtons() {
    var buttons = $('.btn').map(function() {
        return this;
    }).get();
    console.log(buttons)
}

function generatePattern(level) {
    // 
    getAllButtons();
}