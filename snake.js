var size = 50;
var coordonee_pomme_x = 12;
var coordonee_pomme_y = 7;
let body = [[1,7],[2,7],[3,7]];
var direction = "E";
let head =[3,7];
let cadrillage = new Array(15);
var game =true
var score =0;
var time =Math.floor(Date.now()/150);
var jeu =1;
var direction_precedente;
var pomme = {
  carreau_x : 12,
  carreau_y :7,
  draw:function(){
    ctx.beginPath();
    ctx.arc(this.carreau_x*50 +26, this.carreau_y*50+25, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
  
    ctx.fill();
  },
  recup: function(){
  this.carreau_x = Number(Math.random()*14)
  this.carreau_y = Number(Math.random()*14)
  score++
  }


}
function draw() {
  if (time!=Math.floor(Date.now()/150)){
    move();
    if (detect_colosion()){

    }
    time=Math.floor(Date.now()/150)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    affiche_cadrillage();
    pomme.draw();
    affiche_snake()
  }

  raf = window.requestAnimationFrame(draw);
}
for (var i=0;i<15;i++){
  cadrillage[i]= new Array(15);
  for (var j=0;j<15;j++){
    cadrillage[i][j] = 0
  }
}
for (let part in body){
  cadrillage[body[part][1]][body[part][0]]=1;
}
cadrillage[coordonee_pomme_y][coordonee_pomme_x]=2
function snake(){
  if(game){
    canvas=document.getElementById("main-snake");
  ctx = canvas.getContext('2d');
  raf = window.requestAnimationFrame(draw);
  onkeydown = (event)=>{
    var p = document.getElementById("1");
    p.innerHTML = event.key;
    if (event.key=="ArrowDown" && direction_precedente != "N"){
      direction = "S"
    }
    else if (event.key=="ArrowUp" && direction_precedente != "S"){
      direction = "N"
    }
    else if (event.key=="ArrowRight" && direction_precedente != "O"){
      direction = "E"
    }
    else if (event.key=="ArrowLeft" && direction_precedente != "E"){
      direction = "O"
    } }
  };
  if (! game){
    
  }
}

function affiche_cadrillage(){
  let colors = ["rgba(61,128,58)","rgba(61,175,58)"];                                                     // couleurs des careau
  for (var i=0;i<15;i++){                                                       // affichage cadrillage
    
    for (var j = 0;j<15;j++){
      ctx.fillStyle = colors[(i+j)%2];
      ctx.fillRect(size*(i),size*(j),size, size);
    }
  }
  
}
function affiche_pomme(){
  ctx.beginPath();
  ctx.arc(coordonee_pomme_x*50 +26, coordonee_pomme_y*50+25, 25, 0, 2 * Math.PI);
  ctx.fillStyle = "red";

  ctx.fill();
}
function affiche_snake(){
  for (let part in body){
    var i=body[part][0];
    var j=body[part][1];
    ctx.fillStyle = "blue";
    ctx.fillRect(size*(i)-1,size*(j)-1,size-1, size-1);
  }
}
function move(){
  if (direction == "N"){
    head[1]--;
  }
  if (direction == "S"){
    head[1]++;
  }
  if (direction == "E"){
    head[0]++;
  }
  if (direction == "O"){
    head[0]--;
  }
  if (score+3<body.length){
    body.shift();
  }
  body[body.length] = [head[0],head[1]];
  direction_precedente=direction;}

function stop(){
  game=false
}
function detect_colosion (){
  if (head[0] >=15 || head[0] <0 || head[1] >=15 ||head[1]<0 || (head_in_body())){
    return true
  }
  else{
    return false
  }
}
function head_in_body(){
  for (var i ;i<=body.length-1;i++){
    if (head == body[i]){
      return true
    }
    else{
      return false
    }
  }
}