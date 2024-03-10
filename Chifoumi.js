let wins = 0; let loses = 0;
const choices= ["rock","scissors","paper"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

function runGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(userChoice + '_' + computerChoice) {
    case 'rock_paper':
    case 'paper_scissors':
    case 'scissors_rock':
        loses  += 1;
        gameStatus.innerHTML= `M: ${userChoice} | B: ${computerChoice} -> B Wins`
        break;
    case 'rock_scissors':
    case 'paper_rock':
    case 'scissors_paper':
        wins  += 1;
        gameStatus.innerHTML= `M: ${userChoice} | B: ${computerChoice} -> M Wins`
        break;
    case 'rock_rock':
    case 'paper_paper':
    case 'scissors_scissors':
        gameStatus.innerHTML = `M: ${userChoice} | B: ${computerChoice} -> Egalité`
        break;
   }

   gameScore.innerHTML = `ME: ${wins} | Bot: ${loses}`;
}

rock.addEventListener("click",()=>console.log("rock"));
paper.addEventListener("click",()=>console.log("papier"));
scissors.addEventListener("click",()=>console.log("scissors"));