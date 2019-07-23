// let randomlyNumber = parseInt(Math.random() * 50);
// let wrongGuessCount = 0;


let randomlyNumber;
let wrongGuessCount;


function resetGame() {
    randomlyNumber = parseInt(Math.random() * 50);
    wrongGuessCount = 0;
}


resetGame();


function checkTheNumber() {
    let inputNumber = parseInt(document.querySelector("input").value);

    if (inputNumber > randomlyNumber) {
        alert("too big! :( ");
        wrongGuessCount++;
    }

    else if (inputNumber < randomlyNumber) {
        alert("too small! :( ");
        wrongGuessCount++;
    }

    else {
        alert("congratulations! :)  wrong guesses:" + wrongGuessCount);
        resetGame();
       // let randomlyNumber = parseInt(Math.random() * 50);
        // wrongGuessCount = 0;
    }

}


