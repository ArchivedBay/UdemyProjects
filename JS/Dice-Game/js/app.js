/*   '#' denotes items completed in this version
# The game has 2 players 
# In each turn, a player rolls a dice as many times as they wish. 
    Each result gets added to their ROUND score
# BUT, if the player rolls a 1, the round score is reset & their turn is over.
# After that, it's the next player's turn.
# A player can choose to 'Hold', 
    which means that their ROUND score gets added to their PLAYER score. 
- The first player to reach 100 points on PLAYER score wins

TODO: add victory conditions
FIXME: if new-game is pressed on player 2's turn ,round-score does not reset. look in newGame() logic to find.
*/

//initial setup
let playerScores, roundScore, activePlayer, diceVal;

function newGame(){
    playerScores = [0,0]; //arr[0] = p1      arr[1] = p2
    roundScore = 0;  //one shared for both players
    activePlayer = 0; // 0=P1, 1=P2
    diceVal = 1;
    updateScreen();
    // Currently a bug where if game is reset on player 2's turn, roundScore does not update due to improper order here.
}
function startEventListeners(){
    let  //attach event listeners to all of our buttons
        rollButton =    document.querySelector('.btn-roll'),
        holdButton =    document.querySelector('.btn-hold'),
        newGameButton = document.querySelector('.btn-new');

    rollButton.addEventListener('click', roll);
    holdButton.addEventListener('click', addTotalScore);
    newGameButton.addEventListener('click', newGame);
}
newGame(); //immediately call our newGame method to reset all elements.
startEventListeners(); //start listening for button clicks.



//Dice logic
function roll(){
     //temporarily create a var here.
    diceVal = Math.floor(Math.random() * 6)+1 //6 sides - 1@ lowest 6@ highest
    updateScreen();
    diceVal === 1 ? resetRound() : addRoundScore(diceVal); //reset round if 1 else add it.
    return diceVal;
}
//Game logic
function addTotalScore(){
    //if player clicks hold add roundScore to playerScore & end turn
    playerScores[activePlayer] += roundScore;
    resetRound();
}
function addRoundScore(points){
    //if the roll wasn't 1, add the dice value to round score & update
    roundScore += points;
    updateScreen();
}
function togglePlayer(){ //switch players
    return activePlayer = activePlayer === 1 ? 0 : 1;
}
function resetRound(){
    roundScore = 0; // if rolled 1 or turn is over
    updateScreen();
    togglePlayer();
}



//update the UI itself
function updateScreen(){
    let diceEl = document.querySelector('.dice');
    let rs = document.querySelector(`#current-${activePlayer}`);
    let p1 = document.querySelector(`#score-${0}`);
    let p2 = document.querySelector(`#score-${1}`);
    diceEl.src = `images/dice-${diceVal}.png`;
    p1.textContent = playerScores[0];
    p2.textContent = playerScores[1];
    rs.textContent = roundScore;
}















