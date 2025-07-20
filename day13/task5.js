/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
    //1st Way
   //1st row
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   //2nd row
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   //3rd row
   turnRight();
   move();
   putBeeper();
   turnRight();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   //4th row
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   //5th row
   turnRight();
   move();
   putBeeper();
   turnRight();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}

//2nd Way
function mov1(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}
function mov2(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function main(){
   mov1();
   turnLeft();
   move();
   turnLeft();
   mov2();
   turnRight();
   move();
   turnRight();
   mov1();
   turnLeft();
   move();
   turnLeft();
   mov2();
   turnRight();
   move();
   turnRight();
   mov1();
}