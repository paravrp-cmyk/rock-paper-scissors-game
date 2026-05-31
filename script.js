const btn = document.querySelectorAll('.choise-btn');

btn.forEach((button)=>{
    button.addEventListener('click', () =>{
        const humChoice = button.id;
        playRound(humChoice, getCompChoice());
    });
});

function getCompChoice(){
    let i = Math.random()
    let v;
    if (i < 0.33333){
     v = 'rock';
    } else if (i>0.33333 && i < 0.66666){
     v = 'paper';
    } else {
     v ='scissors';
    }
    return v;
}

let humScore = 0;
let compScore = 0;

function playRound(hCoice, compChoice){
    const res = document.querySelector('.result');
    if (hCoice===compChoice){
        humScore+=1;
        compScore+=1;
        res.textContent = `Your choice: ${hCoice}, Computer Choice: ${compChoice}. Score: ${humScore}-${compScore}`;
    } else if (hCoice === 'rock' && compChoice === 'paper' || 
        hCoice === 'paper' && compChoice === 'scissors' ||
        hCoice === 'scissors' && compChoice === 'rock'){
        compScore+=1;
        res.textContent = `Your choice: ${hCoice}, Computer Choice: ${compChoice}. Score: ${humScore}-${compScore}`;
    } else if (hCoice === 'paper' && compChoice === 'rock' ||
        hCoice === 'rock' && compChoice === 'scissors' ||
        hCoice === 'scissors' && compChoice === 'paper'){
        humScore+=1;
        res.textContent = `Your choice: ${hCoice}, Computer Choice: ${compChoice}. Score: ${humScore}-${compScore}`;
    }

    if (humScore === 5 || compScore === 5){
        res.textContent = `GAME OVER! Score: ${humScore}-${compScore}`
        humScore = 0;
        compScore = 0;
    }

}

//*function playGame(){
   //* playRound(humChoice, getCompChoice());
   /**  console.log('=== Round 2 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 3 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 4 ===');
    playRound(getHumChoice(),getCompChoice());
    console.log('=== Round 5 ===');
    playRound(getHumChoice(),getCompChoice());

}
playGame()*/

