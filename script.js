const btn = document.querySelectorAll('.choise-btn');
const rstart = document.querySelector('.restart')
const res = document.querySelector('.result');

btn.forEach((button)=>{
    button.addEventListener('click', () =>{
        const humChoice = button.id;
        playRound(humChoice, getCompChoice());
    });
});

function getCompChoice() {
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

function playRound(hCoice, compChoice){
    if (humScore === 5 || compScore === 5) {
        res.textContent = `GAME OVER! Score: ${humScore}-${compScore}`
        return;
    }

    if (hCoice===compChoice) {
        humScore+=1;
        compScore+=1;
        res.innerText = `Your choice: ${hCoice}\nComputer Choice: ${compChoice}\nScore: ${humScore}-${compScore}`;
    } else if (hCoice === 'Rock' && compChoice === 'Paper' || 
        hCoice === 'Paper' && compChoice === 'Scissors' ||
        hCoice === 'Scissors' && compChoice === 'Rock') {
        compScore+=1;
        res.innerText = `Your choice: ${hCoice}\nComputer Choice: ${compChoice}\nScore: ${humScore}-${compScore}`;
    } else if (hCoice === 'Paper' && compChoice === 'Rock' ||
        hCoice === 'Rock' && compChoice === 'Scissors' ||
        hCoice === 'Scissors' && compChoice === 'Paper') {
        humScore+=1;
        res.innerText = `Your choice: ${hCoice}\nComputer Choice: ${compChoice}\nScore: ${humScore}-${compScore}`;
        }
}

rstart.addEventListener('click', () => {
    humScore = 0;
    compScore = 0;
    res.textContent = "New game started! Choose your symbol!"
})