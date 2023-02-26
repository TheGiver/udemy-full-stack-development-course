/********************| OLD IMPLEMENTATION |********************/
// A function to start the game once any key is pressed
// document.addEventListener("keypress", launchGame);

// Global constant variables
// let level = 1;
// const MAX_LEVEL = 3;
// const BETWEENN_LEVEL_REST_WAIT_TIME = 2000; // 2 second wait time
// const MEMORIZE_THE_PATTERN_WAIT_TIME = 1000; // 1 second preparation to memorize the pattern
// let isGameOver = false;
// let expectedSequence = [];
// let currentNumOfClicks = 0;


// function launchGame() {
//     let buttons = getAllButtons();
//     while(!isGameOver && level <= MAX_LEVEL) {
//         $('#level-title').html('LEVEL ' + level);
//         let expectedNumOfClicks = level;
//         setTimeout(function() {
//             $('#level-title').html('MEMORIZE THE PATTERN');
//             expectedSequence = generatePattern(buttons, level);
//             $('#level-title').html('PUT YOUR MEMORY TO THE TEST...');}
//             , BETWEENN_LEVEL_REST_WAIT_TIME);
//         while(currentNumOfClicks < expectedNumOfClicks) {
//             // Do nothing
//         }
//         level++;
//     }

//     isGameOver ? $('#level-title').html('BETTER LUCK NEXT TIME') : $('#level-title').html('CONGRATS ');
// }

// function getAllButtons() {
//     return buttons = $('.btn').map(function() {
//         return this;
//     }).get();
// }

// function generatePattern(buttons, level) {
//     let sequence = []; 
//     for(let i = 0; i < level; i++) {
//         let index = Math.floor(Math.random() * buttons.length);
//         let pressedButton = buttons[index];
//         $('#' + pressedButton.id).fadeOut(150).fadeIn(150);
//         sequence.push(pressedButton);
//     }
//     return sequence;
// }

// function isCorrectGuess(btn) {
//     btn.addEventListener('click', function() {
//         $('#' + btn.id).fadeOut(150).fadeIn(150);
//         if(expectedSequence.length == 0) {
//             throw '------------------------ Error: Expected Sequence Not Generated -------------';
//         }
//         if(expectedSequence.pop().id !== btn.id) {
//             isGameOver = true;
//             throw '------------------------ Error: Incorrect Guess -------------';
//         }
//         currentNumOfClicks += 1;
//     });
// }

/********************| NEW IMPLEMENTATION |********************/
// Global Variables
let level = 1; 
let isGameOver = false; 
let gameButtons = [];
let generatedSequence = [];
let guessedSequence = [];

// Once a user presses any key, the game should start
$(Document).keypress(launchGame);

// A function that launches the game
function launchGame() {
    buttons = getAllButtons();
    generatedSequence = generatePattern(buttons, level);
}

//A function that generates a pattern
function generatePattern(buttons, level) {
    $('#level-title').text('Level ' + level);
    let sequence = []; 
    for(let i = 0; i < level; i++) {
        let index = Math.floor(Math.random() * buttons.length);
        let pressedButton = buttons[index];
        animateBtnClick(pressedButton.id);
        sequence.push(pressedButton);
    }
    return sequence;
}

// A function that retrieves all clickable buttons required for button generation
function getAllButtons() {
    return buttons = $('.btn').map(function() {
        return this.id;
    }).get();
}

// Trigger that works every time a user clicks a button and checks the button clicked against the 
// generated sequence
$('.btn').click(function() {
    animateBtnClick(this.id);
    let clickedBtn = this.id; 
    let expectedBtn = generatedSequence.pop();
    if(clickedBtn !== expectedBtn) {    
        startOver();
    } 
});

function startOver() {
    $('#level-title').text('GAME OVER!');
    level = 1;
    generatedSequence = [];
    launchGame();
}

function animateBtnClick(btnId) {
    $('#' + btnId).fadeOut(150).fadeIn(150);
}