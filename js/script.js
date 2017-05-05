// VARIABLES

var playButton = document.querySelector('.play');
var screenStart = document.querySelector('.start');
var screenPlay = document.querySelector('.screenplay');
var wordToFind = document.querySelector('.word');
var inputLetter = document.querySelector('.yourletter');
var okButton = document.querySelector('.envoyer');
var screenWin = document.querySelector('.win');
var screenLoose = document.querySelector('.loose');
var replayButton = document.querySelectorAll('.replay');
var afficherLettres = document.querySelector('.letters');

var wordHazard = ["festival", "apero", "binouze", "amis", "alcool", "convivial"];
var x = parseInt(Math.random()*(wordHazard.length));
var wordSelected = wordHazard[x];
var motSecret = wordSelected.toUpperCase();
var tableauReponse = [];
var cpt = 8;
var beer = document.querySelector('.playsprite');
var style = window.getComputedStyle(beer, false);
var positionLeft = parseInt(style.backgroundPositionX);


// EVENEMENTS

playButton.addEventListener('click', play);
okButton.addEventListener('click', userLetter);

for(var v=0; v<replayButton.length; v++){
	replayButton[v].addEventListener('click', replay);
}



// FONCTIONS

beer.style.backgroundPositionX = positionLeft+"px";

function play (){
	screenStart.classList.add('cache');
	screenPlay.classList.remove('cache');
	document.querySelector('.nbr').innerHTML = cpt;
	
	for(i=0; i<motSecret.length; i++){
		tableauReponse[i]= "_ ";
		wordToFind.innerHTML = tableauReponse.join("");	
	}

}


function userLetter(){

	if(cpt>1){
		var letter = document.querySelector('.yourletter');
		var majLetter = (letter.value).toUpperCase();
		var lostLife = 0;

		for(var j=0; j<motSecret.length; j++){
			if(motSecret[j]===majLetter){
				tableauReponse[j] = majLetter;
				wordToFind.innerHTML = tableauReponse.join("");
			}

			if(motSecret[j] != majLetter){
				lostLife ++;
			}
		}

		if( lostLife === motSecret.length ){
			beer.style.backgroundPositionX = parseInt(beer.style.backgroundPositionX)- 771 +"px";
			cpt --
			var paragraphe = document.createElement("p");
			afficherLettres.appendChild(paragraphe).innerHTML = majLetter;
		}

		letter.value = '';
		document.querySelector('.nbr').innerHTML = cpt;
		

		if(motSecret === tableauReponse.join("")){
			screenPlay.classList.add('cache');
			screenWin.classList.remove('cache');
		}


	} else {
		screenPlay.classList.add('cache');
		screenLoose.classList.remove('cache');
		document.querySelector('.reponseici').innerHTML = motSecret ;
	}
}


function replay(){
	screenWin.classList.add('cache');
	screenLoose.classList.add('cache');
	screenPlay.classList.remove('cache');
	x = parseInt(Math.random()*(wordHazard.length));
	wordSelected = wordHazard[x];
	motSecret = wordSelected.toUpperCase();
	wordToFind.textContent = '';
	tableauReponse = [];
	positionLeft = 0;
	beer.style.backgroundPositionX = positionLeft +"px";
	afficherLettres.innerHTML = '';
	cpt = 8;
	document.querySelector('.nbr').innerHTML = cpt;
	lostLife = 0;
	var letter = document.querySelector('.yourletter');
	letter.value = "";
	var majLetter = (letter.value).toUpperCase();

	for(var i=0; i<motSecret.length; i++){
		tableauReponse[i]= "_ ";
		wordToFind.innerHTML = tableauReponse.join("");	
	}
}