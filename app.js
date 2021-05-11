let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoices() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter) {
    switch (letter) {
        case "r": return "Rock";
        case "p": return "Paper";
        case "s": return "Scissors";
    }
}




function win(userChoice, computerChoice) {
    const smallUserWord = 'User'.fontsize(3).sub();
    const smallCompWord = 'Comp'.fontsize(3).sub();
    const userChoice_Div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} Beat's ${converToWord(computerChoice)} ${smallCompWord} You Win! 🔥`;
    userChoice_Div.classList.add('green-glow');
    setTimeout(() => userChoice_Div.classList.remove('green-glow'), 450);
}


function lose(userChoice, computerChoice) {
    const smallUserWord = 'User'.fontsize(3).sub();
    const smallCompWord = 'Comp'.fontsize(3).sub();
    const userChoice_Div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} Loses to ${converToWord(computerChoice)} ${smallCompWord} You Lost.💔`;
    userChoice_Div.classList.add('red-glow');
    setTimeout(() => userChoice_Div.classList.remove('red-glow'), 450);
}


function draw(userChoice, computerChoice) {
    const smallUserWord = 'User'.fontsize(3).sub();
    const smallCompWord = 'Comp'.fontsize(3).sub();
    const userChoice_Div = document.getElementById(userChoice);
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} Equal's ${converToWord(computerChoice)} ${smallCompWord} It's a Draw.`;
    userChoice_Div.classList.add('gray-glow');
    setTimeout(() => userChoice_Div.classList.remove('gray-glow'), 450);
}


function game(userChoice) {
    const computerChoice = getComputerChoices();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener("click", () => game('r'));

    paper_div.addEventListener("click", () => game('p'));

    scissors_div.addEventListener("click", () => game('s'));
}

main();