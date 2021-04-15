//Variable des couleurs
let colors = ["red","red","green","green","blue","blue","yellow","yellow","orange","orange","purple","purple"];
//contenant les couleurs des cartes retournées à un moment donné du jeu.
let cardColors=[];
//Cette variable contient le nombre de paires de cartes qui ont déjà été trouvées.
let score=0;
//variable avec mes divs
let allcards = document.getElementsByClassName("col");
console.log(allcards);
for(let i =0 ; i< allcards.length ; i++) {
    allcards[i].onclick = function(){
        allcards[i].style.background= colors[i];
        cardColors.push(allcards[i])
        console.log(cardColors);
    };
    
};


    /*  if (window.getComputedStyle(cardColor[0],null).getPropertyValue("background") === window.getComputedStyle(cardColor[1],null).getPropertyValue("background")); {
        
    }   */
   /* let addColors = colors[Math.floor(Math.random() * colors.length)];
    cardColors.push(addColors);
    console.log(); */


