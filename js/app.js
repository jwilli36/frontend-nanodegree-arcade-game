// Enemies our player must avoid

var Enemy = function() {

    // Variables applied to each of our instances go here,
	// we've provided one for you to get started
	
	this.sprite = 'images/enemy-bug.png';
	this.bugspeed = [60, 145, 225];
    this.x = -125;
	this.y = this.bugspeed[Math.floor(Math.random()*this.bugspeed.length)];
	var rspeed = this.bugspeed[Math.floor(Math.random() * this.bugspeed.length)];
	this.speed = (Math.random() * (300 - 20)) + 100;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images   
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x += this.speed * dt;

    if(this.x > 500){
    this.x = -120;
    this.y = this.bugspeed[Math.floor(Math.random() * this.bugspeed.length)];
	}

};
// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

    var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
	this.y = y;

// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
};
var allEnemies = [new Enemy(),new Enemy(), new Enemy(), new Enemy(), new Enemy()];

// Place the player object in a variable called player

var player = new Player(200, 400);

Player.prototype.checkCollisions = function(dt){
   for(var i in allEnemies){
     if(Math.abs(this.x - allEnemies[i].x) <=60 && Math.abs(this.y - allEnemies[i].y) <=40){
     this.reset();
     }
	}	
};	


Player.prototype.update = function(dt) {
   if(this.y < -20){
	   this.reset();
   }
    
      this.checkCollisions();
   };
   
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This listens for key presses and sends the keys to your

 Player.prototype.handleInput = function (key) {
   /* var xRun = 100;
    var yRun = 83;

    if(key === 'left' && this.x > 0) {
        this.x -= xRun;
    }
    else if(key === 'up' && this.y > 0) {
        this.y -= yRun;
    }
    else if(key === 'right' && this.x < 400) {
        this.x += xRun;
    }
    else if (key === 'down' && this.y < 400) {
        this.y += yRun;
    } */
	if (key === 'left'){
	   if (this.x > 50) {
	        this.x -= 101;
		}
	}
	if (key === 'up'){
       if (this.y > 100) {
           this.y -=98;
       } else{
          this.reset();
       }
   }
   if (key === 'right') {
     if (this.x < 350) {
         this.x += 101;
     }
   }
   if (key === 'down') {
      if(this.y < 400) {
         this.y += 83;
        }
    }		
}; 
  
     
 Player.prototype.reset = function(){
     this.x = 200;
     this.y = 400;
 };

 

// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});