//Rock Paper Scissors.


function Rps(user, computer) {
    /*  if (user === "rock" && computer === "scissor") return "rock/User";
    if (user === "rock" && computer === "paper") return "paper/Computer";
    if (user === "paper" && computer === "scissor") return "scissor/Computer";
      if (user === "paper" && computer === "scissor") return "scissor/Computer";
      if (user === "scissor" && computer === "rock") return "rock/Computer";
      if (user === "scissor" && computer === "paper") return "scissor/User";
  */

    if (user === computer) return "draw";
    
    if (user === "rock" && computer === "scissor") return "rock/User";
    if (user === "paper" && computer === "rock") return "paper/User";
    if (user === "scissor" && computer === "paper") return "scissor/User";

    return "Computer";

}

console.log(Rps("rock", "rock"));
