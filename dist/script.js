let randomNumber =  parseInt(Math.random()*100+1);
//console.log(randomNumber);
const submit = document.querySelector("#guessButton");
const displayResult = document.querySelector("#result");
const userGuess = document.querySelector("#guess");
const preGuess = document.getElementById("preguess");
const remainGuess = document.getElementById("rem");
const startOver = document.getElementById("new");
console.log(startOver);

const p = document.createElement('p');
//const b = document.createElement('button');

let prevGuess = [ ];
let numOfGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userGuess.value);
        console.log(guess);
        validateOfGuess(guess);

    })
}

function validateOfGuess(guess){
    if(isNaN(guess)){
        alert(`Plz Enter a valid Number`)
    }else if(guess<1){
        alert(`Please Enter A Positive Number`);
    }else if(guess>100){
        alert(`Please Enter a Valid Number`);
    }else{
        prevGuess.push(guess);
        if(numOfGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over,Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Congrats You guessed it Right ${guess}`);
        endGame(); 
    }else if(guess< randomNumber){
        displayMessage(`Number is Low,Go up`);  
    }else if(guess>randomNumber){
        displayMessage(`Number is high,Go down`);
    }

}
function displayGuess(guess){
    userGuess.value = ' ';
    preGuess.innerHTML += `${guess},  `;
    numOfGuess++;
    remainGuess.innerHTML = `${11-numOfGuess}`;
}

function displayMessage(msg){
    displayResult.innerHTML = `<h2>${msg}</h2>`;

}

function endGame(){
    userGuess.value = '';
    userGuess.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener('click',function(e){
        randomNumber =  parseInt(Math.random()*100+1);
        preGuess = [ ];
        numOfGuess = 1;
        preGuess.innerHTML = ' ';
        remainGuess.innerHTML =`${11-numOfGuess}`;
        userGuess.removeAttribute('disabled');
        startOver.removeChild('p');

         playGame = true;
    });
    //playGame = true;

}