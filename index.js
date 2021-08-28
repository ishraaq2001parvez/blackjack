let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let firstCard=0;
let secondCard=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let cards=[];
let sum=0;
let player={
	name:"Me",
	chips:0
};
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+" : $"+player.chips;
function getRandomCard(){
	let x= Math.floor(Math.random()*13)+1;
	if(x==1){
		return 11;
	}
	else if(x>=10 && x<=13){
		return 10;
	}
	else{
		return x;
	}
}

function startGame(){
	isAlive=true;
	firstCard=getRandomCard();
	secondCard=getRandomCard();
	cards.push(firstCard);
	cards.push(secondCard);
	sum+=firstCard+secondCard;
	renderGame();
}
function renderGame(){
	cardsEl.textContent="Cards : ";
	for(let i in cards){cardsEl.textContent+=cards[i]+" ";}
	sumEl.textContent="Sum : "+sum;
	if (sum<21){
		message="Do you want to draw a new card?";
	}
	else if(sum===21){
		message="BlackJack";
		hasBlackJack=true;
		isAlive=false;
	}
	else{
		message="You lost";
		isAlive=false;
	}
	messageEl.textContent=message;
}
function newCard(){
	if(isAlive==true && hasBlackJack==false){
		let card=getRandomCard();
		sum+=card;
		cards.push(card);
		renderGame();
	}
}