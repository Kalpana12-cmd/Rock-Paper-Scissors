    let score = JSON.parse(localStorage.getItem('score')); ;
    if(!score) {
    score = {
    wins : 0,
    losses : 0,
    ties : 0
    }      
    };

 sc();
  let isAutoPlay = false;
  let Id;
function autoPlay(){
    if(!isAutoPlay){
    Id = setInterval(function(){
            const player= pickComputermove();
            playGame(player);
           
        },1000);
        isAutoPlay = true;
    }else{
        clearInterval(Id);
        isAutoPlay = false;
    }
         
    } 
    document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('Rock');
    })
    document.querySelector('.js-paper-button').addEventListener('click',()=>{
        playGame('Paper');
        })
        document.querySelector('.js-scissors-button').addEventListener('click',()=>{
            playGame('Scissors');
            })
 document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('Rock');
    }else if(event.key === 'p'){
        playGame('Paper');
    }else if(event.key === 's'){
        playGame('Scissors');
    }
 })

function playGame(player){
    const computermove = pickComputermove();
    let result =' ';
    if(player === 'Rock'){
        if(computermove === 'Rock'){
        result = 'Tie.';
    }else if(computermove === 'Paper'){
    result = 'you lose.';
    }else{
    result = 'you win.';
    }
    } else if(player === 'Paper'){

    if(computermove === 'Rock'){
    result = 'you win.';
    }else if(computermove === 'Paper'){
    result = ' Tie.';
    }else{
    result = 'you lose.';
    }

    } else if(player === 'Scissors'){
        if(computermove === 'Rock'){
        result = 'you lose.';
    }else if(computermove === 'Paper'){
        result = 'you win.';
    }else{
    result = 'Tie.';
    }
    }
    if( result === 'you win.'){
    score.wins++;
    }else if( result === 'you lose.'){
    score.losses++;
    }else if(result === 'Tie.'){
    score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    sc();

    document.querySelector('.js-result')
    .innerHTML = result;
    document.querySelector('.js-moves')
    .innerHTML = `You <img src="images/${player}-emoji.png" class="img-icon" >
    <img src="images/${computermove}-emoji.png" class ="img-icon">  Computer  `;
}
function sc(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;

}
function pickComputermove(){
    const randnum = Math.random();
    let computermove = ' ';
    if(randnum >= 0 && randnum < 1/3){
        computermove = 'Rock';// alert('You picked Rock, Computer Picked Rock, its tie');
    }else if(randnum >= 1/3  &&  randnum < 2/3){
    computermove = 'Paper';//alert('you picked Rock,computer Picked Paper,You lose');
    }else{
    computermove = 'Scissors';//alert('you picked Rock,computer picked scissors,you win');
    }
    return computermove;
}