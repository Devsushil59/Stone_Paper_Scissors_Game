let userScore =0;
let CompScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    // Generate a random number between 1 and 3
    // 1 = Rock, 2 = Paper, 3 = Scissors
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); // to get a number between 1 and 3
    //console.log(randomNumber);
    return options [randomNumber];
};
const drawGame = () => {
    //console.log("It's a draw!");
    msg.innerText = "Game Is Draw Play Again!";
    msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin,UserChoice,CompChoice)=>{
    if(userWin){
        //console.log("You Win!");
        msg.innerText = `You Win! Your ${UserChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        //console.log("You Lose!");
        msg.innerText = `You Lose! ${CompChoice} beats Your ${UserChoice}`;
        msg.style.backgroundColor = "red";
        CompScore++;
        compScorePara.innerText = CompScore;
    }
};

const playGame = (UserChoice) =>{
    console.log("User choice is = ",UserChoice);
    //Generate computer choice -> Modular function
    const CompChoice = genComputerChoice();
    console.log("Computer choice is = ",CompChoice);
    // Compare choices and determine winner
    if(UserChoice === CompChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(UserChoice === "rock"){
            //paper, scissors
            userWin = CompChoice === "paper" ? false : true;
        }else if(UserChoice === "paper"){
            //rock, secissors
            userWin = CompChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin,UserChoice,CompChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click',() => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    });
});