// V1.0.0
/*      '#' denotes items completed in this version
# The game has 2 players 
- In each turn, a player rolls a dice as many times as they wish. 
    Each result gets added to their ROUND score
- BUT, if the player rolls a 1, the round score is reset & their turn is over.
- After that, it's the next player's turn.
- A player can choose to 'Hold', 
    which means that their ROUND score gets added to their PLAYER score. 
- The first player to reach 100 points on PLAYER score wins
*/



let playerScores, roundScore, activePlayer, diceVal;
//initial setup
function newGame(){
    playerScores = [0,0];
    roundScore = 0;
    activePlayer = 0;
}
newGame(); // call our newGame() to reset the scores & player.

//Dice logic
function roll(){
    let diceEl = document.querySelector('.dice'); //temporarily create a var here.
    diceVal = Math.floor(Math.random() * 6)+1 //6 sides - 1@ lowest 6@ highest
    diceEl.src = `images/dice-${diceVal}.png`; //update the DOM
    return diceVal; //return this data for use later.
}

//Score Logic
function addScore(player, roundScore){
    //if player pushes hold add roundScore to playerScore
    playerScores[player] += roundScore;
}

function resetRound(){
    roundScore = 0; // if rolled 1 or turn is over.
}


















