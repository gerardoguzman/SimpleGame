var PerryX = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    PerryX -=15;
 document.getElementById("perry").setAttribute("x", PerryX)

  }
  else if(e.keyCode == 39){
        PerryX +=15;
 document.getElementById("perry").setAttribute("x", PerryX)
  }
})

var heart1X=Number(document.getElementById("heart1").getAttribute("x"));
 var heart1y=Number(document.getElementById("heart1").getAttribute("y"));
 var heart2X=Number(document.getElementById("heart2").getAttribute("x"));
 var heart2y=Number(document.getElementById("heart2").getAttribute("y"));
