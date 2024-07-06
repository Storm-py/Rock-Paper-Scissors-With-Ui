let userScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const message=document.getElementById('message')
const score=document.getElementById('score')


rockButton.addEventListener('click',()=>{play('Rock')})
paperButton.addEventListener('click',()=>{play('Paper')})
scissorsButton.addEventListener('click',()=>{play('Scissors')})

const play =(userInput)=>{
    const option=['Rock','Paper','Scissors']
    let computerInput=option[Math.floor(Math.random()*3)]
    getResult(userInput,computerInput)
    message.innerHTML= `computer choose ${computerInput} and You choose ${userInput}`
    score.innerHTML=`computer ${computerScore}: You ${userScore}`
}

const getResult=(userInput,computerInput)=>{
    if(userInput===computerInput){
        message.innerHTML=`This is a Draw So no one got any score`
    }
    else if((computerInput=='Rock' && userInput=='Paper')||(computerInput=='Paper' && userInput=="Scissors")||(computerInput=="Scissors" && userInput=="Rock")){
        message.innerHTML=`You have won `;
        userScore++
    }
    else{
        message.innerHTML=`Computer has won`;
        computerScore++;
    }
}