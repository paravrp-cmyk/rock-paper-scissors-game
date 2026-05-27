function getHumChoice(){
    let answer= prompt("Please enter yout choice: Rock, Paper or Scissors")
    return answer
}

function getCompChoice(){
    let i = Math.random()
    let v;
    if (i < 0.33333){
     v = 'Rock';
    } else if (i>0.33333 && i < 0.66666){
     v = 'Paper';
    } else {
     v ='Scissors';
    }
    return v;
}

let humScore = 0;
let compScore = 0;

function playRound(humChoice, compChoice){
    if (!humChoice){
        console.log('You discard the round.');
        return;
    }

    const hum=humChoice.toLowerCase();
    const comp=compChoice.toLowerCase();

    console.log(`Your choice: ${hum} | Computer choice: ${comp}`)
    
    if (hum===comp){
        console.log('Draw in this round!');
        humScore+=1;
        compScore+=1;
    } else if (hum==='rock' && comp==='paper'){
        compScore+=1;
    } else if (hum==='paper' && comp==='rock'){
        humScore+=1;
    } else if (hum==='rock'&&comp==='scissors'){
        humScore+=1;
    } else if (hum==='paper'&&comp==='scissors'){
        compScore+=1;
    } else if (hum==='scissors'&&comp==='rock'){
        compScore+=1;
    } else if (hum==='scissors'&&comp==='paper'){
        humScore+=1;
    }
    console.log(`Round score -> You: ${humScore} | Computer: ${compScore}`);
    console.log('---------------------------------------------');
}

function playGame(){
    console.log('=== Round 1 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 2 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 3 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 4 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 5 ===');
    playRound(getHumChoice(),getCompChoice());

}
playGame()