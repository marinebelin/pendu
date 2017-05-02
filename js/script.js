// VARIABLES

var playButton = document.querySelector('.play');
var screenStart = document.querySelector('.start');
var screenPlay = document.querySelector('.screenplay');
var wordToFind = document.querySelector('.word');
var borderWord = document.querySelectorAll('.borderb');
var inputLetter = document.querySelector('.yourletter');
var okButton = document.querySelector('.envoyer');
var screenWin = document.querySelector('.win');
var screenLoose = document.querySelector('.loose');

var wordHazard = ["coucou", "essai", "test"];
var x = parseInt(Math.random()*(wordHazard.length));
var wordLength = [wordHazard[x].length];
var cpt = 8;

// EVENEMENTS

playButton.addEventListener('click', play);
okButton.addEventListener('click', userLetter);


// FONCTIONS

function play (){
	screenStart.classList.add('cache');
	screenPlay.classList.remove('cache');
	document.querySelector('.nbr').innerHTML = cpt;
	
	for(i=0; i<wordLength; i++){
		borderWord[i].classList.remove('cache');
	}
}

function userLetter(){

	if(cpt>1){
		var letter = document.querySelector('.yourletter').value;
		console.log(letter)
		cpt--;
		console.log(cpt);
		document.querySelector('.nbr').innerHTML = cpt;
	} else {
		screenPlay.classList.add('cache');
		screenLoose.classList.remove('cache');
	}
}