let coinFlip
let count = parseInt(prompt("Enter how many times you want to flip the count:"))

for(let i = 1; i<= count; i++){
    coinFlip = Math.round(Math.random())

    if(coinFlip === 0){
        console.log("Heads")
    }else{
        console.log("tails")
    }
}