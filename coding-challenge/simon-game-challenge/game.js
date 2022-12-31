// A function to start the game once any key is pressed
document.addEventListener("keypress", launchGame);

// Global constant variables
let level = 1;
const MAX_LEVEL = 3;
const BETWEENN_LEVEL_REST_WAIT_TIME = 2000; // 2 second wait time
const MEMORIZE_THE_PATTERN_WAIT_TIME = 1000; // 1 second preparation to memorize the pattern
let isGameOver = false;

function launchGame() {
    let buttons = getAllButtons();
    let expectedSequence = [];
    onClick(buttons, expectedSequence);
    while(!isGameOver && level <= MAX_LEVEL) {
        $('#level-title').html('LEVEL ' + level);
        setTimeout(() => {$('#level-title').html('MEMORIZE THE PATTERN')}, BETWEENN_LEVEL_REST_WAIT_TIME);
        expectedSequence = generatePattern(buttons, level);
        $('#level-title').html('PUT YOUR MEMORY TO THE TEST...');
        level += 1;  
    }
}

function getAllButtons() {
    return buttons = $('.btn').map(function() {
        return this;
    }).get();
}

function generatePattern(buttons, level) {
    let sequence = []; 
    for(let i = 0; i < level; i++) {
        let index = Math.floor(Math.random() * buttons.length);
        let pressedButton = buttons[index];
        $('#' + pressedButton.id).fadeOut(100).fadeIn(100);
        sequence.push(pressedButton);
    }
    return sequence;
}

function onClick(buttons, expectedSequence) {
    $.each(buttons, function(key, val) {
        val.addEventListener('click', function() {
            $('#' + val.id).fadeOut(100).fadeIn(100);
            if(expectedSequence.length == 0) return;
            if(expectedSequence.pop().id !== val.id) throw 'Wrong guess';
        });
    });
}