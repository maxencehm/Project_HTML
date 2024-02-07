function snacke(){
    var canvas=document.getElementById("main-snake")
    var g = canvas.getContext("2d")
    var colors = {216:175};                                                     // couleurs des careau
    for (var i=0;i<15;i++){                                                       // affichage cadrillage
      for (var j = 0;j<15;j++){
          g2d.setColor(new Color(61,colors[(i+j)%2],58));
          g2d.fillRect(size*(i+8),size*(j+1),size, size);
      }
    }
}