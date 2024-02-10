var size = 50;
var coordonee_pomme_x = 12;
var coordonee_pomme_y = 7;
let body = [[1,7],[2,7],[3,7]] ;
function snake(){
  var canvas=document.getElementById("main-snake");
  ctx = canvas.getContext('2d');
  globalThis.ctx;
  affiche_cadrillage();
  affiche_pomme();
  affiche_snake();

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
    var p = document.getElementById("1");
    p.innerHTML = part;
    var i=body[part][0];
    var j=body[part][1];
    ctx.fillStyle = "blue";
    ctx.fillRect(size*(i)-1,size*(j)-1,size-1, size-1);
  }
}