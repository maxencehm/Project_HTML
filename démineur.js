canvas=document.getElementById("main-snake");
ctx = canvas.getContext('2d');
function innit(){
    for (var i=0;i<15;i++){                                                       // affichage cadrillage
      
        for (var j = 0;j<15;j++){
          ctx.fillStyle = colors[(i+j)%2];
          ctx.fillRect(size*(i),size*(j),size, size);
        }
      }
}
document.addEventListener("mousemove",function(e){
    console.log(e.clientX,e.clientY)
})

