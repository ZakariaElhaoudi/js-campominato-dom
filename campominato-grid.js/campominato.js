/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

/*Bonus
 Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

// variabili globali 
const containerCelle = document.getElementById("main-container")
const play = document.getElementById("button-play")
const selectDifficulty =document.getElementById ("select-difficulty")
const arrayNumRandom =  createNumRandomOrderArr(1,16) ;
console.log(arrayNumRandom);
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
play.addEventListener('click',
    function () {
        containerCelle.innerHTML = " ";
        // select che fornisca una scelta tra tre diversi livelli di difficoltà:
    let numCelle ;
    let classe ;
    const difficulty = selectDifficulty.value;

    if (difficulty === "easy") { //con difficoltà 1 => 100 caselle divise in 10 caselle per 10 righe
        numCelle = 100;
        classe = "container-numcelle-easy";
    } else if (difficulty === "normal") { //con difficoltà 2 => 81 caselle divise in 9 caselle per 9 righe;
        numCelle = 81;
        classe = "container-numcelle-normal";
    } else if (difficulty === "hard") { //con difficoltà 3 => 49 caselle divise in 7 caselle per 7 righe;
        numCelle = 49;
        classe = "container-numcelle-hard";
    }
        console.log(classe);
        for (let i = 1 ; i <= numCelle; i++){ // Ogni cella ha un numero progressivo, da 1 a 100.
            let cella = document.createElement("div")
            cella.className = 'cella ' + classe;
            cella.innerText = i;
            containerCelle.append(cella);

            // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
            cella.addEventListener('click',
            function () {
                cella.classList.add("bg-cell");
                console.log(cella.innerText);
            }
            )
        }
}
)

/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba*/



// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta
// funzione che creare numeri in ordine casuale nell’array 
function createNumRandomOrderArr(min,max) {
    const arrayNum = [];
   
    while(arrayNum.length < max) { 
        // creare un numero casuale nel min max 
    const nuovoNum = numRandomMinMax(min,max) 
        if(!arrayNum.includes(nuovoNum)){
            arrayNum.push(nuovoNum)
        }
        
    }
    
    return arrayNum
}
// funzione che creare numeri random
function numRandomMinMax(min,max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba