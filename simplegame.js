
 var PerryX = Number(document.getElementById("perry").getAttribute("x"));
 var PerryY = Number(document.getElementById("perry").getAttribute("y"));
 var foodEaten = 0;
 var timeStart = Date.now()



 document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37 || e.keyCode == 65){
     PerryX -=10;
  document.getElementById("perry").setAttribute("x", PerryX)
   }
   else if(e.keyCode == 39|| e.keyCode == 68){
     PerryX +=10;
  document.getElementById("perry").setAttribute("x", PerryX)
   }
   if(e.keyCode == 40 || e.keyCode == 83){
     PerryY +=10;
  document.getElementById("perry").setAttribute("y", PerryY)
   }
   else if(e.keyCode == 38|| e.keyCode == 87){
    PerryY -=10;
  document.getElementById("perry").setAttribute("y", PerryY)
 }

 heart1Y = Number(document.getElementById("heart1").getAttribute("y"))
 heart1X = Number(document.getElementById("heart1").getAttribute("x"))

 heart2Y = Number(document.getElementById("heart2").getAttribute("y"))
 heart2X = Number(document.getElementById("heart2").getAttribute("x"))


 if (PerryX > heart1X && PerryX < heart1X + 50 && PerryY > heart1Y && PerryY < heart1Y + 50) {
     document.getElementById("heart1").setAttribute("x",NumGen(75,390));
     document.getElementById("heart1").setAttribute("y",NumGen(75,160));
     console.log("good job")
 }


 function NumGen(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
 }


 if (PerryX > heart2X && PerryX < heart2X + 50 && PerryY > heart2Y && PerryY < heart2Y + 50) {
     foodEaten = foodEaten +1
     document.getElementById("score").textContent=foodEaten
 }

 if(foodEaten == 5) {
     document.getElementById("canvas").pauseAnimations()
     var timeStop = Date.now()
     var duration = Math.round((timeStop - timeStart)/1000)+" seconds"
 }

})
