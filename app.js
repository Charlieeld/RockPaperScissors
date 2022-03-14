// const playerChoice = playersPlay();
const computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;


//Query selectors 
const playBtn = document.querySelector(".play")
const cta = document.querySelectorAll(".cta")
const choice = document.querySelectorAll(".turn-btn")
const reset = document.querySelector('.replay')
let winner = document.querySelector('.winner')
let pScore = document.querySelector('.player-score');
let cScore = document.querySelector('.computer-score')


//transition to game
playBtn.addEventListener('click', () => {
    //hide play btn and run resetgame function
    playBtn.classList.add('d-none')
    resetGame()
})

reset.addEventListener('click', () => {
    resetGame()
})


// run players turn and output winner 
for(let i = 0; i < choice.length; i++){
     choice[i].addEventListener('click', e => {
    playerChoice = e.target.value
    playRound(playerChoice, computerChoice)

    if(computerScore === 5 || playerScore === 5) {
        cta.forEach(function(element) {
            element.classList.add('d-none')
        })

        reset.classList.remove('d-none')

        if(computerScore === 5) {
            winner.innerText = `The computer beat you this time`
        } else {
            winner.innerText = `CONGRATULATION, YOU WON!`
        }

    }
    })
}

//run computer turn
function computersPlay() {
    let turn = ['rock', 'paper', 'scissors']
    let compturn = turn[Math.floor(Math.random() * turn.length)];
    return compturn;
}

// Play a round of rock paper scissors
function playRound(playerChoice, computerChoice) {

    computerChoice = computersPlay()

    console.log(`you chose ${playerChoice} , Computer chose ${computerChoice}`)
   
    if(playerChoice === computerChoice) {
        winner.innerText = 'That round was a tie!'
    } else if(playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore ++; 
        KeepCpuSore();
        winner.innerText = 'Computer won that round';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore ++;
        keepPlayerScore();
        winner.innerText = 'You won that round!';
    } else if(playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore ++;
        keepPlayerScore();
        winner.innerText = 'You won that round!';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore ++;
        KeepCpuSore();
        winner.innerText = 'Computer won that round';
    } else if(playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore ++;
        KeepCpuSore();
        winner.innerText = 'Computer won that round';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore ++;
        keepPlayerScore();
        winner.innerText = 'You won that round!';
    } 

    
}



//player score output
function keepPlayerScore() {
     pScore.innerText = `Your score: ${playerScore}`;
     
    
}

//computer score output
function KeepCpuSore() {
    cScore.innerText = `Computer score: ${computerScore}`;
    
}



function resetGame() {
    playerScore = 0;
    computerScore = 0;
    cScore.innerText = `Computer score: ${computerScore}`;
    pScore.innerText = `Your score: ${playerScore}`;

    cta.forEach(function(element) {
        element.classList.remove('d-none')
    });

    winner.classList.remove('d-none')
    winner.innerText = '';
    reset.classList.add('d-none');



}



