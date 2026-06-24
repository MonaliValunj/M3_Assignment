let coinFlip

do {
    coinFlip = Math.round(Math.random())
    console.log("programm is running")
    if(coinFlip === 0){
        console.log("Heads " + coinFlip)
    }else{
        console.log("Tails " + coinFlip)
    }
}while(coinFlip === 0)

console.log("program ended")