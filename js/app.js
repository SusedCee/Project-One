console.log("Juego de la loteria");

//All CARDS
const loteriaCards = [ 
	"elDj",
	"elFaceSwap",
	"elFidgetSpinner",
	"elGlobalWarming",
	"elHipster",
	"elNerd",
	"elTinder",
	"elTroll",
	"elTwitter",
	"elUber",
	"laFeminist",
	"laFlowerCrown",
	"laNotificacion",
	"laSelfie",
	"laThighGap",	
]

//PLAYER START STATS 
//this is the class declaration - constructor function
class Player {  //this is considered an object constructor More info https://www.w3schools.com/js/js_object_constructors.asp
	constructor(playerCards, cardsMatched, score, level, totalClicks){
	this.playerCards = playerCards;
	this.cardsMatched = 0;
	this.score = score;
	this.level = level;
	this.totalClicks = totalClicks;
	};
}

//LEVEL ONE
var levelOne = new Player([], 0, 0, 1, 0);
$("#totalMatched").text("Cards Matched: " + levelOne.cardsMatched);
$("#totalScore").text("Score: " + levelOne.score);
$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
	
//RANDOMIZE FOUR CARDS
//double each card to have a total of 8 cards
randomizeFourCards()
function randomizeFourCards () {
	const tempArr = loteriaCards.slice() //temp array takes out the cards used temporarily so the same one is not used more than once- help with Sandra and Josh
	//wherever I would write the card array I write tempArray
	for (let i = 0; i < 6; i++){
	const randomLoteria = Math.floor(Math.random() * tempArr.length);
	levelOne.playerCards.push(tempArr[randomLoteria]);
	levelOne.playerCards.push(tempArr[randomLoteria]);
	tempArr.splice(randomLoteria, 1)
	}
}
console.log(levelOne.playerCards);

//CONNECT CARD TO BUTTON AND SHOW IMAGE!! 
//first card to first button, second card to second button, third card to third button ...and on
//jquery button in html with array.

var click = 0;
var clickImages = [];
// var gameClock = setTimeout() 

connectCards()
function connectCards (){
	$("#0").click(function(){
		$('#0 img').attr('src', `img/${levelOne.playerCards[0]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[0]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#1").click(function(){
		$('#1 img').attr('src', `img/${levelOne.playerCards[1]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[1]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#2").click(function(){
		$('#2 img').attr('src', `img/${levelOne.playerCards[2]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[2]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#3").click(function(){
		$('#3 img').attr('src', `img/${levelOne.playerCards[3]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[3]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#4").click(function(){
		$('#4 img').attr('src', `img/${levelOne.playerCards[4]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[4]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#5").click(function(){
		$('#5 img').attr('src', `img/${levelOne.playerCards[5]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[5]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#6").click(function(){
		$('#6 img').attr('src', `img/${levelOne.playerCards[6]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[6]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
	$("#7").click(function(){
		$('#7 img').attr('src', `img/${levelOne.playerCards[7]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[7]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
		$("#8").click(function(){
		$('#8 img').attr('src', `img/${levelOne.playerCards[8]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[8]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
		$("#9").click(function(){
		$('#9 img').attr('src', `img/${levelOne.playerCards[9]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[9]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
		$("#10").click(function(){
		$('#10 img').attr('src', `img/${levelOne.playerCards[10]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[10]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
		$("#11").click(function(){
		$('#11 img').attr('src', `img/${levelOne.playerCards[11]}.jpg`);
		levelOne.totalClicks += 1;
		$("#totalClicks").text("Clicks: " + levelOne.totalClicks);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[11]}.jpg`);
		twoClicks()
		checkClicks()
		checkWinLose()
	});
}

// TWO CLICKS FUNCTION AND MATCH CHECK
// when (click == 2) two clicks, if the images are the same add 1 point to cardsMatched and 1 point to score
// if clicks and they do not match change to the back card image after 1 seconds
// clear interval of timer so it can be reused
function twoClicks () { //https://www.w3schools.com/jsref/met_win_settimeout.asp
	if (click == 2 && clickImages[0] === clickImages[1]) {
		levelOne.cardsMatched += 1;
		levelOne.score += 1;
		click = 0;
		clickImages = [];
		$("#totalMatched").text("Matched Cards: " + levelOne.cardsMatched);
		$("#totalScore").text("Score: " + levelOne.score);
	} else if (click == 2 && clickImages[0] !== clickImages[1]) {
		let clock1 = setTimeout(()=> {$(".buttonImage").attr("src", "img/zbackCard.jpg"); }, 1000);//set timer
		click = 0;
		clickImages = []
		$("#totalMatched").text("Matched Cards: " + levelOne.cardsMatched);
		$("#totalScore").text("Score: " + levelOne.score);
	}
}


//CLICK FUNCTION that will lower score if they are clicking too much

function checkClicks () {
	if (levelOne.totalClicks >= 13 && levelOne.totalClicks % 2 !== true){
		totalClicks -= 1;
	}
}

//CHECK IF WON OR LOST
function checkWinLose () {
	if (levelOne.cardsMatched == 6) {
		$("#message").text("You matched all of the cards, you win!");
	} else if (levelOne.totalClicks == 26) {
		$("#message").text("You flipped the cards too many times, you lose!");
	}
}






