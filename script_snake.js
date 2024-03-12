
function innit(){
  size = 50;
  coordonee_pomme_x = 12;
  coordonee_pomme_y = 7;
  body = [[1,7],[2,7],[3,7]];
  direction = "E";
  head =[3,7];
  game =true
  score =0;
  time =Math.floor(Date.now()/150);
  jeu =1;
  direction_precedente= "E";
  pomme = {
    carreau_x : 12,
    carreau_y :7,
    draw:function(){
      ctx.beginPath();
      ctx.arc(this.carreau_x*size +26, this.carreau_y*size+25, 25, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      
      ctx.fill();
    },
    change_location:function(){
      this.carreau_x = Math.round(Math.random()*14);
      this.carreau_y = Math.round(Math.random()*14);
    },
    pomme_in_body: function(){
      for(var element in body){
        if (body[element][0]==this.carreau_x && body[element][1]==this.carreau_y){
          return true;
        }
      };
      return false;
    },
    get_pomme:function(){
      if (head[0]==pomme.carreau_x && head[1]==pomme.carreau_y){
        score++;
        document.getElementById("score").innerHTML = "score = "+score;
        console.log(this.carreau_x,this.carreau_y)
        while (pomme.pomme_in_body()){
          pomme.change_location();
        }

      }
    }}
    canvas=document.getElementById("main-snake");
    ctx = canvas.getContext('2d');
    affiche_cadrillage();
    pomme.draw();
    affiche_snake();
    affiche_eyes();
    ctx.font = "48px serif"
    ctx.fillText("apuyez ici pour commencer à jouer", 30, 335)
    onkeydown = (event)=>{
      snake()
    }
}
function draw() {
  if (time!=Math.floor(Date.now()/150)){
    move();
    if (detect_colision()){
      ctx.fillText("GAME OVER", 230, 335);
      game = false;
      return;
    }
    pomme.get_pomme();
    time=Math.floor(Date.now()/150);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    affiche_cadrillage();
    pomme.draw();
    affiche_snake();
    affiche_eyes()
  }
  raf = window.requestAnimationFrame(draw);
  
}
function snake(){
  if(game){
    raf = window.requestAnimationFrame(draw);
    onkeydown = (event)=>{
      var p = document.getElementById("1");
      if (event.key=="ArrowDown" && direction_precedente != "N"){
        console.log("test")
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
    }
    else {
      innit()
      
    }
    console.log("test")
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
    ctx.arc(coordonee_pomme_x*size +26, coordonee_pomme_y*size+25, 25, 0, 2 * Math.PI);
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
    ctx.fillStyle = "black"
    
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
    function detect_colision (){
      var headinbody=head_in_body();
      if (head[0] >=15 || head[0] <0 || head[1] >=15 ||head[1]<0 || (headinbody)){
        return true
      }
      else{
        return false
      }
    }
    function head_in_body(){
      for (var i=0 ;i<=body.length-2;i++){
        if (head[0] == body[i][0] && head[1] == body[i][1]){
          console.log("test")
          return true
        }
        
      }
      return false
    }
    function affiche_eyes(){
      if (direction == "N" || direction =="O"){
        ctx.fillRect(head[0]*size+6,head[1]*size+6,10,10)
      }
      if (direction =="N"||direction=="E"){
        ctx.fillRect(head[0]*size+31,head[1]*size+6,10,10)
      }
      if (direction =="E"||direction=="S"){
        ctx.fillRect(head[0]*size+31,head[1]*size+31,10,10)
        
      }
      if (direction =="O"||direction=="S"){
        ctx.fillRect(head[0]*size+6,head[1]*size+31,10,10)
        
      }
      
    }