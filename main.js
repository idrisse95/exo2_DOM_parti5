// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;


let style = {
    bd: "border: 1px solid gold",
    bc1: "background-color:blue",
    bc2: "color: red"
}


let tabs = [style.bd,style.bc1,style.bc2]
let randomi = (tabs[Math.floor(Math.random() * tabs.length )])


let btnGo = document.getElementsByTagName("input")[0]
btnGo.addEventListener("click",()=>{
  



    console.log(randomi);

        let p = document.querySelector('p')
        p.style=randomi

})