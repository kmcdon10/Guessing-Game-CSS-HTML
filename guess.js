var a=null,b=[],c=5,e=document.getElementById("status"),f=!1,g;
function h(){
	e.style.display="block";
	e.innerHTML="You are "+k()
}

function l(){
	a=Math.floor(100*Math.random()+1)
}

function m(){
	l();
	n(a)
}

function k(){
	var d=Math.abs(g-a);
	return 5>=d?"Super Hot, "+p():10>=d?"Hot, "+p():15>=d?"Warm, "+p():25>=d?"Cold, "+p():"Ice Cold, "+p()
}

function p(){
	return g>a?"Guess Lower":"Guess Higher"
}

function n(d){
	q();
	isNaN(g)||100<g||1>g||f?f?(e.style.display="block",e.innerHTML="You already picked that number"):alert("This is not a valid number"):parseInt(g,10)===parseInt(d,10)?(e.style.display="block",e.innerHTML="You Are CORRECT!"):(0===b.length?b=[g]:b.push(g),h(),r())
}

function q(){
	f=!1;
	b.forEach(function(d){
		parseInt(g,10)===parseInt(d,10)&&(f=!0)
	})
}

function r(){
	2<c?(c-=1,document.getElementById("guess-count").innerHTML=c+" Guesses Remaining"):2===c?(c-=1,document.getElementById("guess-count").innerHTML=c+" Guess Remaining"):document.getElementById("guess-count").innerHTML="Sorry, Play Again!"
}

window.doesNumberToGuessExist=function(){
		g=parseInt(document.getElementById("playersGuess").value,10);null===a?(m(),document.getElementById("playersGuess").value=""):(document.getElementById("playersGuess").value="",n(a))
};

window.status=h;
window.createNumberToGuess=l;
window.startGame=m;
window.hotOrCold=k;window.higherOrLower=p;
window.isItTheNumber=n;
window.checkDuplicate=q;
window.guessesRemaining=r;
window.playAgain=function(){
	a=null;c=5;b=[];
	e.innerHTML="Your game has been restarted, submit a new guess!";
	g=void 0;
	document.getElementById("guess-count").innerHTML=c+" Guesses Remaining";document.getElementById("playersGuess").value=""
};
window.hint=function(){
	void 0===g?alert("Please submit a guess first!"):document.getElementById("guess-count").innerHTML=a
};
