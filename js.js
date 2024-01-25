let disp = document.querySelector("#display");
let computer = document.querySelector("#computer");
let res = document.querySelector("#result");

let scocom=0;
let scouse=0;


function getName(x) {
    var userchoice = x.innerText;
    // disp.innerText = "User's Choice: " + userchoice;
    computercho  = comp();
    updateText();
    compare(userchoice,computercho);
    Score(updateScore);
  }


function comp()
{
let choice=["Rock","Paper","Scissor"]
let rand=Math.floor(Math.random()*3);
return choice[rand];
}

function updateText()
 {
    computer.innerText = computercho;
    }


function compare(userchoice,computercho)
{
    if(userchoice===computercho)
    {
        res.innerText="Draw"
    }
    else if(userchoice==="Rock"&&computercho==="Paper")
    {
        res.innerText="Computer Wins"
    }
    else if(userchoice==="Rock"&&computercho==="Scissor")
    {
        res.innerText="User Wins"
    }
    else if(userchoice==="Paper"&&computercho==="Rock")
    {
        res.innerText="User Wins"
    }
    else if(userchoice==="Paper"&&computercho==="Scissor")
    {
        res.innerText="Computer Wins"
    }
    else if(userchoice==="Scissor"&&computercho==="Paper")
    {
        res.innerText="User Wins"
    }
    else if(userchoice==="Scissor"&&computercho==="Rock")
    {
        res.innerText="Computer Wins"
    }
}


function Score(callback)
{
    if(res.innerText==="User Wins")
    {
        scouse++;
        updateScore();
    }
    else if(res.innerText==="Computer Wins")
    {
        scocom++;
        updateScore();
    }
}

function updateScore()
{
    SU.innerText="Player : " + scouse;
    SC.innerText="Computer : " + scocom;
}




