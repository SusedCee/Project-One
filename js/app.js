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
	constructor(playerCards, cardsMatched, score, level){
	this.playerCards = playerCards;
	this.cardsMatched = 0;
	this.score = score;
	this.level = level;
	};
}

//LEVEL ONE
var levelOne = new Player([], 0, 0, 1);
$("#totalMatched").text("Matched Cards: " + levelOne.cardsMatched);
$("#totalScore").text("Score: " + levelOne.score);
	
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

connectCards()
function connectCards (){
	$("#0").click(function(){
		$('#0 img').attr('src', `img/${levelOne.playerCards[0]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[0]}.jpg`);
		twoClicks()
	});
	$("#1").click(function(){
		$('#1 img').attr('src', `img/${levelOne.playerCards[1]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[1]}.jpg`);
		twoClicks()
	});
	$("#2").click(function(){
		$('#2 img').attr('src', `img/${levelOne.playerCards[2]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[2]}.jpg`);
		twoClicks()
	});
	$("#3").click(function(){
		$('#3 img').attr('src', `img/${levelOne.playerCards[3]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[3]}.jpg`);
		twoClicks()
	});
	$("#4").click(function(){
		$('#4 img').attr('src', `img/${levelOne.playerCards[4]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[4]}.jpg`);
		twoClicks()
	});
	$("#5").click(function(){
		$('#5 img').attr('src', `img/${levelOne.playerCards[5]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[5]}.jpg`);
		twoClicks()
	});
	$("#6").click(function(){
		$('#6 img').attr('src', `img/${levelOne.playerCards[6]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[6]}.jpg`);
		twoClicks()
	});
	$("#7").click(function(){
		$('#7 img').attr('src', `img/${levelOne.playerCards[7]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[7]}.jpg`);
		twoClicks()
	});
		$("#8").click(function(){
		$('#8 img').attr('src', `img/${levelOne.playerCards[8]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[8]}.jpg`);
		twoClicks()
	});
		$("#9").click(function(){
		$('#9 img').attr('src', `img/${levelOne.playerCards[9]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[9]}.jpg`);
		twoClicks()
	});
		$("#10").click(function(){
		$('#10 img').attr('src', `img/${levelOne.playerCards[10]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[10]}.jpg`);
		twoClicks()
	});
		$("#11").click(function(){
		$('#11 img').attr('src', `img/${levelOne.playerCards[11]}.jpg`);
		click += 1;
		clickImages.push(`img/${levelOne.playerCards[11]}.jpg`);
		twoClicks()
	});
}


// when (click == 2) two clicks, if the images are the same add 1 point to cardsMatched and 1 point to score
// if clicks and they do not match change to the back card image after 4 seconds
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
				let clock1 = setTimeout(()=> {$(".buttonImage").attr("src", "img/zbackCard.jpg"); }, 4000);//set timer
				click = 0;
			clickImages = []
			$("#totalMatched").text("Matched Cards: " + levelOne.cardsMatched);
			$("#totalScore").text("Score: " + levelOne.score);
		}
}



// checkMatch()
// function checkMatch () {
// 	if (click[1] === click[2]){
// 	levelOne.cardsMatched += 1;
// 	levelOne.score += 1;
// 	}
// }


			//for (i = 0; i <= click.length; i++){




//randomize 6 cards in the buttons and make sure to double each one 





















//CHANGE IMAGE IF CLICKED
//when user clicks on a certain card show image that goes with string Resource https://wpbeaches.com/swap-image-via-button-with-jquery/
//and show on screen
//resource https://www.youtube.com/watch?v=SGKXZUGe2sw

// function changeImage (){

// 	$(".cardbtn").on({
// 		"click": function(){
// 			if ($(".cardbtn") === "ElUber"){
// 				$(".buttonImage").attr("src", ".../img/elUber.jpg");
// 			} else if  ($(".cardbtn") === "La Notificacion") {
// 				$(".buttonImage").attr("src", ".../img/laNotificacion.jpg");
// 			} else if ($(".cardbtn") === "El Twitter") {
// 				$(".buttonImage").attr("src", ".../img/elTwitter.jpg");
// 			} else if ($(".cardbtn") === "El Fidget Spinner") {
// 				$(".buttonImage").attr("src", ".../img/.elFidgetSpinner.jpg");
// 			} else if ($(".cardbtn") === "El Troll") {
// 				$(".buttonImage").attr("src", ".../img/elTroll.jpg");
// 			} else if ($(".cardbtn") === "La Feminist") {
// 				$(".buttonImage").attr("src", ".../img/laFeminist.jpg");
// 			} else if ($(".cardbtn") === "La Selfie") {
// 				$(".buttonImage").attr("src", ".../img/laSelfie.jpg");
// 			} else if ($(".cardbtn") === "La Thigh Gap") {
// 				$(".buttonImage").attr("src", ".../img/laThighGap.jpg");
// 			} else if ($(".cardbtn") === "El Face Swap") {
// 				$(".buttonImage").attr("src", ".../img/elFaceSwap.jpg");
// 			} else if ($(".cardbtn") === "Global Warming") {
// 				$(".buttonImage").attr("src", ".../img/globalWarming.jpg");
// 			} else if ($(".cardbtn") === "El Hipster") {
// 				$(".buttonImage").attr("src", ".../img/elHipster.jpg");
// 			} else if ($(".cardbtn") === "La Flower Crown") {
// 				$(".buttonImage").attr("src", ".../img/laFlowerCrown.jpg");
// 			} else if ($(".cardbtn") === "El Tinder") {
// 				$(".buttonImage").attr("src", ".../img/elTinder.jpg");
// 			} else if ($(".cardbtn") === "El Nerd") {
// 				$(".buttonImage").attr("src", ".../img/elNerd.jpg");
// 			} else if ($(".cardbtn") === "El Dj") {
// 				$(".buttonImage").attr("src", ".../img/elDj.jpg");
// 			}
// 		}
// 	})
// }












// // SHUFFLE CARDS
// function shuffleCards (array) {
// 	const justCards = levelOne.playerCards;
// 	let cards = justCards.length, i;
// 	while(cards > 0) {
// 		i = Math.floor(Math.random()*cards--)
// 		levelOne.finalShuffled.push(array.splice(i, 1)[0]);
// 	}
// 	return finalShuffled;
// }


// SHUFFLING A RANDOM 8 CARD ARRAY
//This function gets the four cards and randomly puts them in the new array twice.


//my try ----------------------------------------

// let finishedAdding = false;
// let added;
// let randomNum = 0;

// this.numberOfCards = 8;

// added = false; 


// const justCards = levelOne.playerCards;

// shuffleCards()
// function shuffleCards()  { // from 0 to 1 will run twice
// 	for ( i = 0; i < 2; i++){
//         	// const pickOutFour = () {
//         for (i = 0; i < levelOne.playerCards.length; i++){ //each card in 4-card array
//         	const ri = Math.floor(Math.random() * levelOne.playerCards.length);
//         	levelOne.finalShuffled.push(justCards[ri]);
//      	}
//     }      	
// }
// console.log(levelOne.finalShuffled)


// ----------------------------tried a differenct cullen approach
                //pick random number between 0 and numberOfCards - 1
                // while (!added) //no added
                
//             levelOne.finalShuffled[randomNum] = levelOne.playerCards[i];
//                 //check if there is already a card at that position

//                 levelOne.finalShuffled[randomNum] = levelOne.playerCards[i];//and try to add the card to the new 8-card array
                	
//                 	if(added === false){ ////if there is already a card there,
//                 		continue; //give up and loop back around
//                 	}			
//                 	if(added === true){//if successful, set added = true
//                 		added = true;
//                 	}
//             }
//         }
//     }

// }
// console.log(levelOne.finalShuffled);


//------------------------------------cullen
// let finishedAdding = false;
// let added;
// let randomNum = 0;


// this.numberOfCards = 8;

// function shuffleCards()
// {
// 	const justCards = levelOne.playerCards;
//     for ( i = 0; i < justCards.length; i++) //each card in 4-card array
//     {
//         for (let i = 0; i <= 1; i++) // from 0 to 1 will run twice
//         {        
//             added = false;        
//             while (!added) //no added
//             {
//                 randomNum = Math.floor(Math.random() * levelOne.numberOfCards) - 1;//pick random number between 0 and numberOfCards - 1
                
//                 levelOne.finalShuffled.push(randomNum)
//                 //check if there is already a card at that position

//                 levelOne.finalShuffled[randomNum] = levelOne.playerCards[i];//and try to add the card to the new 8-card array
                	
//                 	if(added === false){ ////if there is already a card there,
//                 		continue; //give up and loop back around
//                 	}			
//                 	if(added === true){//if successful, set added = true
//                 		added = true;
//                 	}
//             }
//         }
//     }

// }
// console.log(levelOne.finalShuffled);



// ------------------------------Derek found this function
// thank you fisher yates shuffle method!
// const shuffle = (array) => {
//     let cards = array.length, i;
//     while(cards > 0){
//         i = Math.floor(Math.random()*cards--)
//         shuffledDeck.push(array.splice(i, 1)[0]);
//     }
//     return shuffledDeck;
// }




