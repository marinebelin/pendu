// VARIABLES

var playButton = document.querySelector('.play');
var screenStart = document.querySelector('.start');
var screenPlay = document.querySelector('.screenplay');
var wordToFind = document.querySelector('.word');
var inputLetter = document.querySelector('.yourletter');
var okButton = document.querySelector('.envoyer');
var screenWin = document.querySelector('.win');
var screenLoose = document.querySelector('.loose');

var wordHazard = ["coucou", "essai", "test"];
var x = parseInt(Math.random()*(wordHazard.length));
var motSecret = wordHazard[x];
var wordLength = [wordHazard[x].length];
var tableauReponse = [];
var cpt = 8;
var beer = document.querySelector('.playsprite');
var style = window.getComputedStyle(beer, false);
var positionLeft = parseInt(style.backgroundPositionX);
// EVENEMENTS

playButton.addEventListener('click', play);
okButton.addEventListener('click', userLetter);


// FONCTIONS

beer.style.backgroundPositionX = positionLeft+"px";

function play (){
	screenStart.classList.add('cache');
	screenPlay.classList.remove('cache');
	document.querySelector('.nbr').innerHTML = cpt;
	
	for(i=0; i<wordLength; i++){
		tableauReponse[i]= "_ ";
		console.log(tableauReponse);
		wordToFind.innerHTML = tableauReponse.join("");	

	}

}



function userLetter(){

	if(cpt>1){
		var letter = document.querySelector('.yourletter').value;
		var resteATrouver = parseInt(wordLength);

		for(var j=0; j<wordLength; j++){
			if(motSecret[j]===letter){
				tableauReponse[j] = letter;
				wordToFind.innerHTML = tableauReponse.join("");
				resteATrouver --;
				console.log(resteATrouver);
				/*beer.style.backgroundPositionX = parseInt(beer.style.backgroundPositionX)+ 771 +"px";*/
			}
		}
		cpt--;
		beer.style.backgroundPositionX = parseInt(beer.style.backgroundPositionX)- 771 +"px";
		document.querySelector('.nbr').innerHTML = cpt;
	/*} else if(resteATrouver==0){
			screenPlay.classList.add('cache');
			screenWin.classList.remove('cache');
*/
	} else {
		screenPlay.classList.add('cache');
		screenLoose.classList.remove('cache');
	}
}