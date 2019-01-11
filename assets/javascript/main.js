var letters= ["a", "d", "f", "m"];
var userGuess=[];
var wins=0;
var losses=0;
var guessesLeft=9;
var letterToGuess=null;

var updateLetterToGuess=function(){
    letterToGuess=letters[Math.floor(Math.random()*letters.length)];
    //have computer pick a random generated letter in letters array in letters variables
};
var updateGuessesLeft=function(){
    document.querySelector("#left").textContent=guessesLeft;
//taking info contained in guess left and assign to place in html
};

var updateUserGuess=function(){
   //taking info contained in user guess and assign to place in html 
   document.querySelector("#guesses").textContent=userGuess.join(" | ");
   

};
var freshBoard=function(){
    guessesLeft=9;
    userGuess=[];
    updateUserGuess();
    updateLetterToGuess();
    updateGuessesLeft();
    //reset all of variables and pushes all values to html 
};

updateLetterToGuess();

document.onkeyup=function(event){
    guessesLeft--;
    //reduce remaining guess left value by 1, decrement reduce by 1
    var currentGuess=event.key;
    // console.log(currentGuess)
    userGuess.push(currentGuess);
    // console.log(userGuess);
    updateUserGuess();
    updateGuessesLeft();
//dom update including new information/ values
if(currentGuess===letterToGuess){
    wins++;
    document.querySelector("#wins").textContent=wins;
    freshBoard();
}
if(guessesLeft===0){
    losses++;
    document.querySelector("#losses").textContent=losses;
    freshBoard();

}
};


