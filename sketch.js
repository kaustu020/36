var database,gameState=0,playerCount,form,player,game
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game()
game.getState()
game.start()
 
}

function draw(){
  background("white");
  
   
   
  
}


