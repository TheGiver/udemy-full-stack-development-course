/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   
    /*
    The robot will move to the bottom 
    right corner
    */
    repeat(4) {
       move();
    }
    
    /*
    Make the robot move 5 steps to the 
    top after turning left once
    */
    turnLeft();
    repeat(4) {
       move();
    }
 }