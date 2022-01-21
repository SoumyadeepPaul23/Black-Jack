let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        rain()
        show()
        applause()
       
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
   
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
function rain(){
    let amount =500;
    let body=document.querySelector("body");
    let i=0;
    messageEl.textContent="You've got Blackjack!";
    messageEl.style.animationName="zoom"
    while(i<amount){
        let drop=document.createElement("i");
        let size=Math.random()*5;
        let pos=Math.floor(Math.random()*95);
        let delay=Math.random()* -20;
        let duration=Math.random()*5;


        drop.style.width=0.2+size+'px';
        drop.style.left=pos+'vw';
        drop.style.animationDelay=delay+'s';
        drop.style.animationDuration=1+duration+'s';

        body.appendChild(drop);
        i++;
    }
}
let refreshBtn=document.getElementById("refresh")
let strtBtn=document.getElementById("strt")
let newcrdBtn=document.getElementById("newcrd")
function show(){
    refreshBtn.style.display='inline'
    strtBtn.style.display='none'
    newcrdBtn.style.display='none'
}
function relad(){
    location.reload();
}
function applause(){
    var audio = new Audio('wining_sound.wav');
    audio.play();
}
