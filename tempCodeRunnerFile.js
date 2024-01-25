let disp = document.querySelector("#display");
let computer = document.querySelector("#computer");
let res = document.querySelector("#result");


function getName(x) {
    var userchoice = x.innerText;
    disp.innerText = "User's Choice: " + userchoice;
    updateText();
    compare();

    // compare(userchoice);
  }


function comp()
{
let choice=["Rock","Paper","Scissor"]
let rand=Math.floor(Math.random()*3);
return choice[rand];
}

function updateText()
 {
    var computercho  = comp();
    computer.innerText = "Computer's Choice: " + computercho;
  }


function compare(userchoice,computercho)
{
    if(userchoice===computercho)
    {
        res.innerText="Result : Draw"
    }
    else
    {
        res.innerText="Result : Not Draw"
    }
}





