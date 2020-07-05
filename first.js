

function ageInDays() {
	var ageInyear =prompt("what year you born ")

var ageInDayss = (2020-ageInyear) * 365;
 var h1 =document.createElement('h1');
var textAnswer = document.createTextNode('you are'+ ageInDayss + 'days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset()
{
	document.getElementById('ageInDays').remove();
}
function generate()
{
	var image = document.createElement('img');
	var div = document.getElementById('flex-cat-gen');
	image.src="http://thecatapi.com/api/images/get?formate=scr&type=gif&size=small"
	div.appendChild(image);
}

function rpsGame(yourchoice){
	var humanChoice , botChoice;
	humanChoice = yourchoice.id;
	botChoice = numberToChoice(randToRpsInt());
	result = decideWinner(humanChoice,botChoice);
	message = finalMessage(result);
	rpsFrontEnd(humanChoice,botChoice,message);

	
}
function randToRpsInt()
{
	return Math.floor(Math.random()*3);
}
function numberToChoice(number){
	return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice)
{
	var rpsDatabase = {
		'rock':{'scissors':1,'rock':0.5,'paper':0},
		'paper':{'rock':1,'scissors':0,'paper':0.5},
		'scissors':{'paper':1,'scissors':0.5,'rock':0}
	};
	var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];


}
function finalMessage([yourScore,computerScore]){
    
    //console.log(computerScore);
	if(yourScore === 0){
		return {'message':'you lost!','color':'red'};
	}else if(yourScore === 0.5){
		return {'message':'you tied!','color':'yellow'};
	}else{
		return {'message':'you won!','color':'green'};
	}

	

}

function rpsFrontEnd(humanImageChoice ,computerChoice, finalMessage){

	var imagesDatabase = {

		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	};
	//console.log(imagesDatabase['rock']);

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
	

	messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+";font-size:60px;padding:30px:'>"+finalMessage['message']+"</h1>"

	botDiv.innerHTML = "<img src='" + imagesDatabase[computerChoice] + "'height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

	document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv);
	document.getElementById('flex-box-rps-div').appendChild(messageDiv);	

}

var all_button = document.getElementsByTagName('button');
var copyAllButton = [];
for(let i=0;i<all_button.length;i++)
{
	copyAllButton.push(all_button[i].classList[1]);
}

function buttonColorChange(buttonThingy){

	if(buttonThingy.value ==='red'){
		buttonRed();
	}
	else if(buttonThingy.value === 'green'){
		buttonGreen();
	}
	else if(buttonThingy.value === 'reset'){
		buttonReset();
	}
	else if(buttonThingy.value === 'random'){
   		buttonRandom();
	}


}

function buttonRed(){
	for(let i=0;i<all_button.length;i++)
	{
		all_button[i].classList.remove(all_button[i].classList[1]);
		all_button[i].classList.add('btn-danger');
	}
}

function buttonGreen(){
	for(let i=0;i<all_button.length;i++)
	{
		all_button[i].classList.remove(all_button[i].classList[1]);
		all_button[i].classList.add('btn-success');
	}
}

function buttonReset()
{

	for(let i=0;i<all_button.length;i++)
	{
		all_button[i].classList.remove(all_button[i].classList[1]);
		all_button[i].classList.add(copyAllButton[i]);
	}

}

function buttonRandom()
{
	let choice = ['btn-primary','btn-danger','btn-success','btn-warning'];
	for(let i=0;i<all_button.length;i++)
	{
		let randomNumber = Math.floor(Math.random() *4);
		console.log(randomNumber);
		all_button[i].classList.remove(all_button[i].classList[1]);
		all_button[i].classList.add(choice[randomNumber]);

	}
}

let blackJackGame = {
   'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
   'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
   'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
   'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,10]},
   'wins':0,
   'losses':0,
   'draws':0,
   'isStand':false,
   'turnOver':false,
};

const YOU = blackJackGame['you']
const DEALER = blackJackGame['dealer']

document.querySelector('#blackjack-hit-button').addEventListener('click',blackJackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDealer);
document.querySelector('#blackjack-stand-button').addEventListener('click', boatPlay);
const hitSound = new Audio('/home/abhishek/swish.m4a');
const lossSound = new Audio('/home/abhishek/aww.mp3');
const winSound = new Audio ('/home/abhishek/cash.mp3')


function blackJackHit(){
	if(blackJackGame['isStand'] === false)
	{
			let card = randCard();
			showCard(card,YOU);
			updateScore(card,YOU);
			showScore(YOU);	
	}

	
}
function sleep(ms)
{
  return new promise(resolve => setTimeout(resolve,ms));
}
 function boatPlay()
{
	blackJackGame['isStand'] = true;
	while(DEALER['score'] <16 && blackJackGame['isStand'] === true)
	{
		let card = randCard();
		showCard(card,DEALER);
		updateScore(card,DEALER);
		showScore(DEALER);
	
	}

		blackJackGame['turnOver'] = true;
		let winner = computeWinner();
         showResult(winner);
	
}


function blackJackDealer(){
   
	if(blackJackGame['turnOver'] === true)
	{
		    blackJackGame['isStand'] = false;
			let yourImages = document.querySelector('#your-box').querySelectorAll('img');
			let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

			for(i=0 ; i<yourImages.length;i++)
			{
				yourImages[i].remove();
			}
			let k = dealerImages.length;
			

			for(let j=0; j<k ;j++)
			{
				
				dealerImages[j].remove();
			}

			YOU['score'] = 0;
			DEALER['score'] = 0;
			document.querySelector('#your-blackjack-result').textContent = 0;
			document.querySelector('#dealer-blackjack-result').textContent = 0;
			document.querySelector('#your-blackjack-result').style.color = '#ffffff';
			document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

			document.querySelector('#blackjack-result').textContent = "let's play";
			document.querySelector('#blackjack-result').style.color = 'black';
			blackJackGame['turnOver'] = true;
		}
}

function showCard(card,activePlayer)
{
	if(activePlayer['score'] <= 21)
	{
		let cardImage = document.createElement('img');
		cardImage.src = `/home/abhishek/${card}.png`;
		document.querySelector(activePlayer['div']).appendChild(cardImage);
		hitSound.play();
	}
}

function randCard()
{
	let randomIndex = Math.floor(Math.random() *13);
	return blackJackGame['cards'][randomIndex];
}
function updateScore(card,activePlayer){

	
	if(card === 'A')
	{
		if(activePlayer['score'] + blackJackGame['cardsMap'][card][1]<=21)
		{
           activePlayer['score'] += blackJackGame['cardsMap'][card][1];
		}
		else
		{
			activePlayer['score'] += blackJackGame['cardsMap'][card][0];
		}
	}
	else
	{
		activePlayer['score'] +=blackJackGame['cardsMap'][card];
	}
	console.log(activePlayer['score']);
}

function showScore(activePlayer)
{
	if(activePlayer['score'] >21)
	{
		document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
		document.querySelector(activePlayer['scoreSpan']).style.color = 'red';

	}
	else
	{
		document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
	}

}

function computeWinner()
{
	let winner;
	if(YOU['score'] <= 21)
	{
		if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
		{
			blackJackGame['wins']++;
            winner = YOU;
		}
		else if(YOU['score']<DEALER['score'])
		{
			blackJackGame['losses']++;
			winner = DEALER;
		}
		else if(YOU['score'] == DEALER['score'])
		{
		     blackJackGame['draws']++;
			
		}
	}else if(YOU['score'] >21 && DEALER['score']<=21)
	{
		blackJackGame['losses']++;
		winner = DEALER;

	}
	else if(YOU['score'] > 21 && DEALER['score'] >21)
	{
		blackJackGame['draws']++;
	
		
	}
	return winner;
}

function showResult(winner){
	let message,messageColor ;
	if(blackJackGame['turnOver'] === true)
	{

			if(winner === YOU)
			{
				document.querySelector('#win').textContent = blackJackGame['wins'];
			message = 'you won!';
			messageColor = 'green';
			winSound.play();
			}
			else if(winner === DEALER)
			{
				document.querySelector('#loss').textContent = blackJackGame['losses'];
				message = 'you loss!';
				messageColor = 'red';
				lossSound.play();
			}
			else
			{
				document.querySelector('#draw').textContent = blackJackGame['draws'];
				message = 'draw!'
				messageColor = 'black';
			}


			document.querySelector('#blackjack-result').textContent = message;
			document.querySelector('#blackjack-result').style.color = messageColor;
	}	

}

