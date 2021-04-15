//Variable des couleurs
let colors = ["red","red","green","green","blue","blue","yellow","yellow","orange","orange","purple","purple"];
//contenant les couleurs des cartes retournées à un moment donné du jeu.
let cardColor=[];
//Cette variable contient le nombre de paires de cartes qui ont déjà été trouvées.
let score=0;
//variable avec mes divs
let allcards = document.getElementsByClassName("col");
console.log(allcards);
for(let i =0 ; i< allcards.length ; i++) {
    allcards[i].onclick = function(){
        allcards[i].style.background= colors[i];
        cardColor.push(allcards[i])
        console.log(cardColor); 
        if (window.getComputedStyle(cardColor[0],null).getPropertyValue("background") === window.getComputedStyle(cardColor[1],null).getPropertyValue("background")); {
            alert("Bien joué 1 points");  
            cardColor = []; 
        }        
    };    
};



    /*      else {
        cardColor[0].style.background = "#000000";
        cardColor[1].style.background = "#000000";
    } */
  
   //Fonctions pour faire fonctionner le bouton 
let game =document.getElementById("thegame")
let btntext = document.getElementById("play")
function getResolution() { 
    //si la résolution de l'écran est de moins de 768px  
    if(screen.width < 768) {
        btntext.innerText = "Veuillez vous mettre en mode paysage pour jouer"
    } else {
        btntext.innerText = "Jouer au jeu"
    }
}
function removeBtn(){
    btntext.remove()
    game.classList.remove("d-none");
    game.classList.add("d-block");
}


    
   /* const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}*/


