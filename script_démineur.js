let cadrillage =[]

var canvas=document.getElementById("main-demineur")
canvas.height = canvas.width
class cases  {
  grafic= document.createElement("img")
  co_x=0
  y=0
  set_property(){
    this.grafic.height=Math.round(canvas.clientWidth/25)
    this.grafic.width=Math.round(canvas.clientWidth/25)
    this.grafic.id = this.x+"-"+this.y
    
  }
  __init__(x,y) {
    this.grafic.src="image/case démineur.png"
    this.co_x=x
    this.y=y
    this.set_property()
    this.grafic.addEventListener("click",this.discovering)
  }
  value=0
  discover = false
  discovering(){
    console.log(this.co_x)
    if (this.value == 0){
      console.log("test")
      value = ""
    }
    else if(this.value == 9){
      value= "💣"
    }
    var img =this
    img.remove()
    this.grafic = document.createElement("div")
    this.grafic.textContent=this.value
    this.grafic.height=Math.round(canvas.clientWidth/25)
    this.grafic.width=Math.round(canvas.clientWidth/25)
    this.grafic.id = this.x+"-"+this.y
    if (this.x==0){
      var id ="24-" +toString(this.x-1)
      document.getElementById(id).insertAdjacentElement("afterend",this.grafic)
    }
    
  }
  
}
function innit(){
  for (var i=0;i<25;i++){                                                       // affichage cadrillage
    let ligne = []
    for (var j = 0;j<25;j++){
      newcase = new cases
      newcase.__init__(j,i)
      ligne.push(newcase)
      
      canvas.insertAdjacentElement("afterbegin",newcase.grafic)
    }
    cadrillage.push(ligne)
  }
}
window.onresize=function(){
  cadrillage.forEach(ligne =>{
    ligne.forEach(tile =>{
      tile.resize()
    })
  })
}



innit()

