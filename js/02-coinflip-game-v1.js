let randomNum = Math.round(Math.random())
let choice = prompt("Choose Heads or Tails").toLowerCase()
document.write(randomNum)

if (randomNum < 1) {
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!")
    } else {
        alert("The flip was heads but you chose tails...you lose!")
    }
} else {
    if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!")
    } else {
        alert("The flip was tails and you chose tails...you win!")
    }
}
