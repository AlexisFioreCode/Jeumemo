//Variable des couleurs
let colors = ["red","red","green","green","blue","blue","yellow","yellow","orange","orange","purple","purple"];
// randomiser mon tableau colors
const shuffleArray = colors.sort((a, b) => 0.5 - Math.random());
console.log(shuffleArray);
// bouton reload de la page
let btnreload = document.getElementById("reload");
console.log(btnreload)
// variables pour faire fonctionner le bouton play
let game = document.getElementById("thegame");
let btntext = document.getElementById("play") ;
//tableau vide contenant les couleurs des cartes retournées à un moment donné du jeu.
let cardColor=[];
//Cette variable contient le nombre de paires de cartes qui ont déjà été trouvées.
let score=0;
let showscore = document.getElementById("showscore")
console.log(showscore);
//variable avec mes divs
let allcards = document.getElementsByClassName("col");
for(let i =0 ; i< allcards.length ; i++) {
    allcards[i].onclick = function(){
        //pour chaque carte de mon tableau je lui met une couleur.
        allcards[i].style.backgroundColor= colors[i];
        //push l'élément cliqué dans mon tableau vide
        cardColor.push(allcards[i])
        //permet de ne pas double cliquer sur un élément
        cardColor[0].style.pointerEvents = "none";
        // console.log(cardColor);
        tryCheat() 
        // pour faire apparaitre les deux couleur je met un délai sur ma fonction compare 
        setTimeout(function(){ if(cardColor.length === 2 ) {
             compare();               
            };
        }, 1500);            
    };      
};

function compare(){
    //Compare tout les style de mon élement qu'ils soient en CSS ou rajouté via JS
    if (window.getComputedStyle(cardColor[0],null).getPropertyValue("background") === window.getComputedStyle(cardColor[1],null).getPropertyValue("background")) {        
        score ++;
        showscore.innerText = "Score = " + score; 
        console.log(score);
        endGame();      
    }
    else {
        //remet le background des cartes en noir
        cardColor[0].style.background = "#000000";
        cardColor[1].style.background = "#000000";

    }
    //remet le click sur l'élément 
    cardColor[0].style.pointerEvents = "auto";
    cardColor = [];
};

function tryCheat(){
    if(cardColor.length > 2 ) {
        //remet le click sur l'élément 
        cardColor[0].style.pointerEvents = "auto";
        cardColor[0].style.background = "#000000";
        cardColor[1].style.background = "#000000";
        cardColor[2].style.background = "#000000";
        cardColor = [];
        alert("Ne choisir que deux cartes")
    };  
}


function endGame(){
    //si le score est strictement égal a 6 j'enlèvle le jeu et appelle le bouton
    if (score === 6){
        game.classList.remove("d-block");
        game.classList.add("d-none");
        btnreload.classList.remove("d-none");
        btnreload.classList.add("d-block");
    }
}

         
//Fonctions pour faire fonctionner le bouton 
function getResolution() { 
    //si la résolution de l'écran est de moins de 768px  
    if(screen.width < 768) {
        btntext.innerText = "Veuillez vous mettre en mode paysage pour jouer"
    } 
    else {
        btntext.innerText = "Jouer au jeu"
    }
}
function removeBtn(){
    btntext.remove()
    game.classList.remove("d-none");
    game.classList.add("d-block");
};


/* let showtimer = getElementById("showtimer"); */
// Faire le timer 
// utiliser le getTime()

