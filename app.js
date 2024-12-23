let choices = document.querySelectorAll(".choice");
let resultmsg = document.querySelector(".resultmsg");
let msg = document.querySelector(".msg");
let usercount = document.querySelector(".usercount");
let computercount = document.querySelector(".computercount");
userscore = 0;
computerscore = 0;
//let userchoice = ""; //decalare
//let computerchoice = ""; //decalare

const getComputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    //console.log(options[randIdx]);
    return options[randIdx];
};

const showwinner = () => {
    computerchoice = getComputerchoice();

    console.log(`Player choice is: ${userchoice}`);
    console.log(`computer choice is:: ${computerchoice}`);

    if (computerchoice === userchoice) {
        console.log(`${computerchoice} & ${userchoice} is same`);
        msg.innerText = " its draw!";
        winnereffect();
    } else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")) {
        console.log(`"${userchoice} beats ${computerchoice}" user win`);
        msg.innerText = "🎉 You win!";
        winnereffect();

        userscore++; //user winn so +1
        usercount.innerText = userscore;
        //console.log(`computer-score is::${computerscore}`);
        //console.log(`user-score is::${userscore}`);
    } else {
        console.log(`"${computerchoice} beats ${userchoice}" computer win`);
        msg.innerText = "💻 Computer wins! ";
        winnereffect();
        computerscore++; //computer winn so +1
        computercount.innerText = computerscore;
        //console.log(`computer-score is::${computerscore}`);
        //console.log(`user-score is::${userscore}`);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id");
        //let userchoice = event.target.id;
        //console.log(`Player choice: ${userchoice}`);
        //console.log(`computer input is:: ${getComputerchoice()}`);
        showwinner();
    });
});

const winnereffect = () => {
    resultmsg.classList.add("updatewinnereffect");

    setTimeout(() => {
        resultmsg.classList.remove("updatewinnereffect");
        resultmsg.classList.add("msg");
    }, 1000);

}