// const playerChoice = playersPlay();
const computerChoice = "";
const playerChoice = "";
let computerScore = 0;
let playerScore = 0;

function computersPlay() {
    let turn = ['rock', 'paper', 'scissors']
    let choice = turn[Math.floor(Math.random() * turn.length)];

    return choice;
}

function playersPlay() {
    let msg = ('pick between rock, paper, scissors')
    return prompt(msg.toLowerCase())
}




function playRound(playerChoice, computerChoice) {
    console.log(`you chose ${playerChoice} , Computer chose ${computerChoice}`)
    
    if(playerChoice === computerChoice) {
        return "tie";
    } else if(playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        return "comp";
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++
        return "player";
    } else if(playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++
        return "player";
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return "comp";
    } else if(playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return "comp";
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++
        return "player";
    } 

}


function game() {
    for(let i = 1; i <=5; i++ ) {
    playRound(playersPlay(), computersPlay())
}
    if(computerScore > playerScore) {
        console.log('computer wins the game.')
    } else if(computerScore < playerScore){
        console.log('You win the game!')
    } else {
        console.log('This game is a draw')
    }
}

game()



/*
switch(computerScore){
        case 1: 
        console.log('That was unlucky')
        break;
        case 2: 
        console.log('The computer wins again')
        break;
        case 3: 
        console.log('You got this')
        break;
        case 4: 
        console.log('One last chance')
        break;
        case 5: 
        console.log('Computer has won!')
        break;
    }

    switch(playerScore){
        case 1: 
        console.log('You got your first point on the board')
        break;
        case 2: 
        console.log('You won again')
        break;
        case 3: 
        console.log('You got this')
        break;
        case 4: 
        console.log('One more point to go')
        break;
        case 5: 
        console.log('Congratulations, you win!')
        break;

        */