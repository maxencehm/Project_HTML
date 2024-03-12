let boxes= document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;
let indique_turn_x = document.getElementById("turn-box-X")
let indique_turn_O = document.getElementById("turn-box-O")
indique_turn_x.style.backgroundColor="#08D9D6"

boxes.forEach(e =>{
    e.innerHTML =""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML == ""){
            e.textContent = turn;
            cheakWin();
            changeTurn();
            cheakDraw();
        }
    })
})

function changeTurn(){
    isGameOver = true
    boxes.forEach(e=>{
        if(e.innerHTML==""){
            isGameOver =false
        }
    })
    if(turn == "X"){
        indique_turn_O.style.backgroundColor="#08D9D6"
        indique_turn_x.style.backgroundColor="#252A34"
        turn= "O";

    }
    else{
        indique_turn_x.style.backgroundColor="#08D9D6"
        indique_turn_O.style.backgroundColor="#252A34"
        turn = "X";
    }
}


function cheakWin(){
    var winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        console.log(boxes[winConditions[5][0]].innerHTML)
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " win 🥳";
            document.querySelector("#play-again").style.display = "inline";

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function cheakDraw(){
    if(isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

 function reset(){
    isGameOver = false;
    turn = "X";
    document.querySelector("#results").innerHTML = "";
    indique_turn_O.style.backgroundColor="#252A34"
    indique_turn_x.style.backgroundColor="#08D9D6"

    boxes.forEach(e =>{
        e.textContent = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
        console.log("test")
    })
}