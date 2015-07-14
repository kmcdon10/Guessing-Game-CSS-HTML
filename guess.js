var answer = null;
var guessesRemaining = 5;
var array = [];
var playerStatus = document.getElementById("status");
var valid = !1;
var playersGuess;

function siteStatusFunc(){
	playerStatus.style.display = "block";
	playerStatus.innerHTML = "You are " + hotOrColdFunc()
}

function generateAnswerFunc(){
	answer = Math.ceil(100 * Math.random());
}

function startGameFunc(){
	generateAnswerFunc();
	checkNumFunc(answer);
}

function hotOrColdFunc(){
	var difference = Math.abs(playersGuess - answer);
	return 5 >= difference ? "Super Hot, " + hiLoFunc() : 10 >= difference ? "Hot, "+ hiLoFunc() : 15 >= difference ? "Warm, "+ hiLoFunc() : 25 >= difference ? "Cold, " + hiLoFunc() : "Ice Cold, " + hiLoFunc();
}

function hiLoFunc(){
	return playersGuess > answer ? "Guess Lower" : "Guess Higher";
}

function checkNumFunc(difference){
	isDuplicateFunc();
	isNaN(playersGuess) || 100<playersGuess || 1>playersGuess ||valid?valid?(playerStatus.style.display="block",playerStatus.innerHTML="You already picked that number") : alert("This is not a valid number") : parseInt(playersGuess,10) === parseInt(difference,10) ? (playerStatus.style.display="block",playerStatus.innerHTML="You Are CORRECT!") : (0===array.length ? array=[playersGuess] : array.push(playersGuess),siteStatusFunc(),guessesLeftFunc());
}

function isDuplicateFunc(){
	valid =! 1;
	array.forEach(function(difference){
		parseInt(playersGuess,10) === parseInt(difference,10) && (valid =! 0);
	})
}

function guessesLeftFunc(){
	2 < guessesRemaining ? (guessesRemaining -= 1,document.getElementById("guess-count").innerHTML=guessesRemaining+" Guesses Remaining") : 2 === guessesRemaining ? (guessesRemaining -= 1,document.getElementById("guess-count").innerHTML=guessesRemaining+" Guess Remaining"):document.getElementById("guess-count").innerHTML="Sorry, Play Again!"
}

window.doesNumberToGuessExist=function(){
		playersGuess = parseInt(document.getElementById("playersGuess").value,10);
		null === answer ? (startGameFunc(),document.getElementById("playersGuess").value="") : (document.getElementById("playersGuess").value="",checkNumFunc
		(answer));
};

window.status = siteStatusFunc;
window.createNumberToGuess = generateAnswerFunc;
window.startGame = startGameFunc;
window.hotOrCold = hotOrColdFunc;
window.higherOrLower = hiLoFunc;
window.isItTheNumber = checkNumFunc;
window.checkDuplicate = isDuplicateFunc;
window.guessesRemaining = guessesLeftFunc;
window.playAgain=function(){
	answer=null;guessesRemaining=5;array=[];
	playerStatus.innerHTML="The game has been restarted, submit a new guess!";
	playersGuess=void 0;
	document.getElementById("guess-count").innerHTML=guessesRemaining+" Guesses Remaining";
	document.getElementById("playersGuess").value="";
};
window.hint=function(){
	void 0 === playersGuess ? alert("Please submit a guess first!") : document.getElementById("guess-count").innerHTML=answer
};
