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
