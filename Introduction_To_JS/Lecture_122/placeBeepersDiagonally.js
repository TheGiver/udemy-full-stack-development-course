/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    putBeeper();
    
    repeat(3) {
       reachDiagonalSpot();
       repeat(3) {
          turnLeft();
       }
    }
    
    reachDiagonalSpot();
 }
 
 function reachDiagonalSpot() {
    move();
    turnLeft();
    move();
    putBeeper();
 }