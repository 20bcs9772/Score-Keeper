const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1B = document.querySelector("#p1B");
const p2B = document.querySelector("#p2B");
const resetB = document.querySelector('#reset');
const select = document.querySelector('#win');
let p1S = 0;
let p2S = 0;
let winningScore = 3;
let GameOver = false;
p1B.addEventListener('click', () => {
    if (!GameOver) {
        p1S += 1;
        if (p1S == winningScore) {
            GameOver=true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
        }
        p1Score.innerText = p1S;
    }
})
p2B.addEventListener('click', () => {
    if (!GameOver) {
        p2S += 1;
        if (p2S == winningScore) {
            GameOver=true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
        }
        p2Score.innerText = p2S;
    }
})
select.addEventListener('change',function(){
    winningScore= parseInt(this.value);
    reset();
})
resetB.addEventListener('click', reset)
function reset() {
    GameOver=false;
    p1S=0;
    p2S=0;
    p1Score.innerText = p1S;
    p2Score.innerText = p2S;
    p1Score.classList.remove('winner','loser');
    p2Score.classList.remove('loser','winner');
}