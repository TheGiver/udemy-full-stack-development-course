/* A constant representing the path to all dice images */
const imageStore = "../resources/images/dice";
const imageExt = ".png";

/* A message to be printed following the throw */
const winnerMessage = "The winner is: ";
const drawMessage = "It is a draw!"; 

function randomNumberGenerator() {
    var result = [];

    for(var i = 0; i < 2; i++) {
        result.push(Math.floor(Math.random() * 6) + 1);
    }

    /* Set player one's image to the random number assigned to them */
    document.getElementById("player-one-dice-img").src = imageStore + result[0] + imageExt;

    /* Set player two's image to the random number assigned to them */
    document.getElementById("player-two-dice-img").src = imageStore + result[1] + imageExt;

    findWinner(result); 
}

/* Decide on the winner of the round */
function findWinner(props) {
    if(props[0] > props[1]) {
        document.getElementById("round-result-prompt").innerHTML = winnerMessage + "player one";
    } else if(props[1] > props[0]) {
        document.getElementById("round-result-prompt").innerHTML = winnerMessage + "player two";
    } else {
        document.getElementById("round-result-prompt").innerHTML = drawMessage;
    }
}