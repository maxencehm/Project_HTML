var panel=document.getElementById(".choices")
var bot_choices
var bot_score = 0
var player_score = 0
var res = document.getElementById("gameStatus")
var scores = document.getElementById("gameScore")
const container = document.querySelector('section')
const your_choice = document.createElement("p")
const bot_choice = document.createElement("p")
const win =document.createElement("p")
const lose =document.createElement("p")
const draw =document.createElement("p")
win.textContent = "Tu as gagné"
lose.textContent = "Tu as perdu"
draw.textContent = "Egalité"
bot_choice.textContent="le choix du bot :"
your_choice.textContent = "ton choix :"
const stone = document.createElement("img")               // les images sont créé ici ainsi que leurs propriété (src,fonction onclick)
stone.src = "image/rock image.png"
stone.onclick = "stone_is_chosen()"
stone.addEventListener("click",stone_is_chosen)
const cisor = document.createElement("img")
cisor.src = "image/ciseaux image.png"
cisor.addEventListener("click",cisor_is_chosen)
const paper = document.createElement("img")
paper.src = "image/paper.png"
paper.addEventListener("click",paper_is_chosen)     //jusque là
const next_round = document.createElement("button")
next_round.textContent = "manche suivante"
next_round.addEventListener("click",manche_suivante)
function init(){//permet dd'ajouter les trois images lorsqu'on veut 
    container.insertAdjacentElement("afterbegin",paper)
    container.insertAdjacentElement("afterbegin",cisor)
    container.insertAdjacentElement("afterbegin",stone)
}
function stone_is_chosen(){// les fonction qui permetent la détéction
    choice = stone.cloneNode()
    choices = 1
    play()
}
function paper_is_chosen(){
    choice = paper.cloneNode()
    choices = 3
    play()
}
function cisor_is_chosen(){
    choice = cisor.cloneNode()
    choices = 2
    play()
}
function manche_suivante(){
    choice.remove()
    bot_choices.remove()
    your_choice.remove()
    bot_choice.remove()
    next_round.remove()
    res.remove()
    init()
}
function play(){ // les modifications de la page lorsque le choix est fait.
    cisor.remove()
    stone.remove()
    paper.remove()
    
    container.insertAdjacentElement('afterbegin',choice)
    container.insertAdjacentElement("afterbegin",your_choice)

    bot_choices = Math.random()*3
    if (bot_choices<1){
        if (choices == 2){
            res.textContent = "Tu as perdu"
            bot_score++
        }
        else if (choices==3){
            res.textContent = "Tu as gagné"
            player_score++
        }
        else {
            res.textContent = "Egalité"
        }
        bot_choices = stone.cloneNode()
    }
    else if (bot_choices<2){
        if (choices==3){
            res.textContent = "Tu as perdu"
            bot_score++
        }
        else if(choices==1){
            res.textContent = "Tu as gagné"
            player_score++
        }
        else{
            res.textContent = "Egalité"
        }
        bot_choices = cisor.cloneNode()
    }
    else{
        if (choices==1){
            res.textContent = "Tu as perdu"
            bot_score++
        }
        else if(choices == 2){
            res.textContent = "Tu as gagné"
            player_score++
        }
        else{
            res.textContent = "Egalité"
        }
    bot_choices=paper.cloneNode()
        }
    container.insertAdjacentElement("beforeend",bot_choice)
    container.insertAdjacentElement("beforeend",bot_choices)
    container.insertAdjacentElement("beforeend",res)
    container.insertAdjacentElement("afterend",next_round)
    scores.textContent="ME : " + player_score +"| BOT : "+bot_score
}

function reset(){
    bot_score = 0
    player_score = 0
    scores.textContent="ME : " + player_score +"| BOT : "+bot_score

}
init();
