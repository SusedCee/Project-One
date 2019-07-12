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
	constructor(playerCards, finalShuffled, cardsMatched, score, level){
	this.playerCards = playerCards;
	// this.finalShuffled = [];
	this.cardsMatched = 0;
	this.score = score;
	this.level = level;
	};
}

//LEVEL ONE
var levelOne = new Player([], 0, 0, 1);
	
//RANDOMIZE FOUR CARDS
//double each card to have a total of 8 cards
randomizeFourCards()
function randomizeFourCards () {
	const tempArr = loteriaCards.slice() //temp array takes out the cards used temporarily so the same one is not used more than once- help with Sandra and Josh
	//wherever I would write the card array I write tempArray
	for (let i = 0; i < 4; i++){
	const randomLoteria = Math.floor(Math.random() * tempArr.length);
	levelOne.playerCards.push(tempArr[randomLoteria]);
	levelOne.playerCards.push(tempArr[randomLoteria]);
	tempArr.splice(randomLoteria, 1)
	}
}
console.log(levelOne.playerCards);




//CONNECT CARD TO BUTTON!! 
//first card to first button, second card to second button, third card to third button ...and on
//jquery button in html with array.
connectCards()
function connectCards (){
$("#0").click(function(){
	$('#0 img').attr('src', `img/${levelOne.playerCards[0]}.jpg`);
});
$("#1").click(function(){
	$('#1 img').attr('src', `img/${levelOne.playerCards[1]}.jpg`);
});
$("#2").click(function(){
	$('#2 img').attr('src', `img/${levelOne.playerCards[2]}.jpg`);
});
$("#3").click(function(){
	$('#3 img').attr('src', `img/${levelOne.playerCards[3]}.jpg`);
});
$("#4").click(function(){
	$('#4 img').attr('src', `img/${levelOne.playerCards[4]}.jpg`);
});
$("#5").click(function(){
	$('#5 img').attr('src', `img/${levelOne.playerCards[5]}.jpg`);
});
$("#6").click(function(){
	$('#6 img').attr('src', `img/${levelOne.playerCards[6]}.jpg`);
});
$("#7").click(function(){
	$('#7 img').attr('src', `img/${levelOne.playerCards[7]}.jpg`);
});
}

//when user clicks the card flip that one and let them flip one more
// add point to score and freeze the cards matched 
// if not a match 2 seconds to continue seeing then switch back
// function clickCard


// Check to see if the two cards are a match
// function checkForMatch









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




