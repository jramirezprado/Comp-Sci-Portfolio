// this code down here is my canvas about my game 
var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var gameOver = false;

// this down here is my box of his movement like, w, wich is the with and the y wich is the y axis and the x for how big the box or wait ever it is it and the h for the height and var box wich is in the game  
var box = {
    x:300,
    y:159,
    w:40,
    h:40,
    draw: function(){
          
        ctx.beginPath();    
        ctx.rect(this.x, this.y,this.w,this.h);  
        ctx.stroke();
        
    },
    move: function(){
      this.x = this.x - 2; 
      
      if(box.x < -45 ){
          box.x = 400
      }
      
      
    }
    
}

// this down here is just the isAbove or the isLeft 
function isColliding(obj1, obj2){
var isAbove = obj2.y+obj2.h < obj1.y
var isLeft  = obj2.x+obj2.w < obj1.x
var isRight = obj2.xpos > obj1.x+obj1.w
var isBelow = obj2.y > obj1.y+ obj1.h

return !(isAbove || isLeft ||isRight|| isBelow)
}

// Here is just creating the player and how big you want the STICK RUN 4 
var player ={
    x:30,
    y:159,
    w:4,
    h:40,
    isJump:false,
    canJump:true,
    goingup:true, 
   draw: function(){
    
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h)
    ctx.stroke();
   },
   jump: function(){
       
    if(player.isJump)
        if(player.goingup){
            this.y = this.y - 3;
            
            if(player.y < 50){
                player.goingup = false;
            }
        }
        
        if(!player.goingup){
            this.y =this.y + 2;
            if(player.y > 159 ){
                player.isJump = false 
                player.canJump = true
                player.goingup = true 
            }
        }
   }
}
  
  




  

// This how the you could push space bar or any key to make the stick jump in the game also how if it is false or true
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    
     if(player.canJump){
        player.canJump = false; 
        player.isJump = true;
    }
}


// this is about the gameloop and my canvas height
function gameLoop(){
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height)
    ctx.fillStyle = "#857DB1"
    ctx.fillRect(0, 0, mycanvas.width, mycanvas.height)
    ctx.fill()

    ctx.beginPath();
    ctx.rect(0,200,400,200);
    ctx.stroke();
    
    box.move() 
    box.draw()
    
    player.jump();
    player.draw()
    
    // 
    if(isColliding(box,player) ){
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.fillText("GAME OVER " ,50,100 );
        ctx.fill()
        gameOver = true; 
        
    }
    
    if(gameOver === false ){
    window.requestAnimationFrame(gameLoop);
    }
}
gameLoop();













