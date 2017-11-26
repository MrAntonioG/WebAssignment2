window.onload= function ()
{

var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");

window.addEventListener('keydown', downkey, true);
window.addEventListener('keyup', upkey, true);
var enshot=false;
var enycoord = 0;
var enxcoord = 0;
var lives = 5;
var dif = 1;
var enemyspeed = 1;
var score = 0;
var xcoord = canvas.width/2;
var ycoord = canvas.height - 100;
var right = false;
var left = false;
var shot = false;
var bulycoord = 0;
var bulxcoord = 0;
var shotsnd = new Audio("laser.wav");
var expsnd = new Audio("exp.wav");
var enemy = true;
var godown = false;
var alivelist = [];
var enemylist = [ [50, 0, true,30], [50, 55 , true,30], [50, 110, true,30],[50, 165, true,30],[50, 220, true,30],[50, 275, true,30],[50, 330, true,30],[50, 385, true,30],[50, 440, true,30],[50, 495, true,30],[50, 550, true,30],
[105, 0, true,20], [105, 55 , true,20], [105, 110, true,20],[105, 165, true,20],[105, 220, true,20],[105, 275, true,20],[105, 330, true,20],[105, 385, true,20],[105, 440, true,20],[105, 495, true,20],[105, 550, true,20],
[160, 0, true,20], [160, 55 , true,20], [160, 110, true,20],[160, 165, true,20],[160, 220, true,20],[160, 275, true,20],[160, 330, true,20],[160, 385, true,20],[160, 440, true,20],[160, 495, true,20],[160, 550, true,20],
[215, 0, true,10], [215, 55 , true,10], [215, 110, true,10],[215, 165, true,10],[215, 220, true,10],[215, 275, true,10],[215, 330, true,10],[215, 385, true,10],[215, 440, true,10],[215, 495, true,10],[215, 550, true,10],
[270, 0, true,10], [270, 55 , true,10], [270, 110, true,10],[270, 165, true,10],[270, 220, true,10],[270, 275, true,10],[270, 330, true,10],[270, 385, true,10],[270, 440, true,10],[270, 495, true,10],[270, 550, true,10]
]
var barrier = [ [canvas.height-220,60, true],[canvas.height-220,80, true],[canvas.height-220,100, true], [canvas.height-220,120, true],
				[canvas.height-200,40, true],[canvas.height-200,60, true],[canvas.height-200,80, true],[canvas.height-200,100, true], [canvas.height-200,120, true], [canvas.height-200,140, true],
				[canvas.height-180,20, true],[canvas.height-180,40, true],[canvas.height-180,60, true],[canvas.height-180,80, true],[canvas.height-180,100, true], [canvas.height-180,120, true], [canvas.height-180,140, true],[canvas.height-180,160, true],
				[canvas.height-160,20, true],[canvas.height-160,40, true],[canvas.height-160,60, true],[canvas.height-160,80, true],[canvas.height-160,100, true], [canvas.height-160,120, true], [canvas.height-160,140, true],[canvas.height-160,160, true],
				[canvas.height-140,20, true],[canvas.height-140,40, true],[canvas.height-140,60, true],[canvas.height-140,80, true],[canvas.height-140,100, true], [canvas.height-140,120, true], [canvas.height-140,140, true],[canvas.height-140,160, true],
				
				[canvas.height-220,60 + 225, true],[canvas.height-220,80 + 225, true],[canvas.height-220,100 + 225, true], [canvas.height-220,120 + 225, true],
				[canvas.height-200,40 + 225, true],[canvas.height-200,60 + 225, true],[canvas.height-200,80 + 225, true],[canvas.height-200,100 + 225, true], [canvas.height-200,120 + 225, true], [canvas.height-200,140 + 225, true],
				[canvas.height-180,20 + 225, true],[canvas.height-180,40 + 225, true],[canvas.height-180,60 + 225, true],[canvas.height-180,80 + 225, true],[canvas.height-180,100 + 225, true], [canvas.height-180,120 + 225, true], [canvas.height-180,140 + 225, true],[canvas.height-180,160 + 225, true],
				[canvas.height-160,20 + 225, true],[canvas.height-160,40 + 225, true],[canvas.height-160,60 + 225, true],[canvas.height-160,80 + 225, true],[canvas.height-160,100 + 225, true], [canvas.height-160,120 + 225, true], [canvas.height-160,140 + 225, true],[canvas.height-160,160 + 225, true],
				[canvas.height-140,20 + 225, true],[canvas.height-140,40 + 225, true],[canvas.height-140,60 + 225, true],[canvas.height-140,80 + 225, true],[canvas.height-140,100 + 225, true], [canvas.height-140,120 + 225, true], [canvas.height-140,140 + 225, true],[canvas.height-140,160 + 225, true],
				
				[canvas.height-220,60 + 450, true],[canvas.height-220,80 + 450, true],[canvas.height-220,100 + 450, true], [canvas.height-220,120 + 450, true],
				[canvas.height-200,40 + 450, true],[canvas.height-200,60 + 450, true],[canvas.height-200,80 + 450, true],[canvas.height-200,100 + 450, true], [canvas.height-200,120 + 450, true], [canvas.height-200,140 + 450, true],
				[canvas.height-180,20 + 450, true],[canvas.height-180,40 + 450, true],[canvas.height-180,60 + 450, true],[canvas.height-180,80 + 450, true],[canvas.height-180,100 + 450, true], [canvas.height-180,120 + 450, true], [canvas.height-180,140 + 450, true],[canvas.height-180,160 + 450, true],
				[canvas.height-160,20 + 450, true],[canvas.height-160,40 + 450, true],[canvas.height-160,60 + 450, true],[canvas.height-160,80 + 450, true],[canvas.height-160,100 + 450, true], [canvas.height-160,120 + 450, true], [canvas.height-160,140 + 450, true],[canvas.height-160,160 + 450, true],
				[canvas.height-140,20 + 450, true],[canvas.height-140,40 + 450, true],[canvas.height-140,60 + 450, true],[canvas.height-140,80 + 450, true],[canvas.height-140,100 + 450, true], [canvas.height-140,120 + 450, true], [canvas.height-140,140 + 450, true],[canvas.height-140,160 + 450, true],
				
				[canvas.height-220,60 + 675, true],[canvas.height-220,80 + 675, true],[canvas.height-220,100 + 675, true], [canvas.height-220,120 + 675, true],
				[canvas.height-200,40 + 675, true],[canvas.height-200,60 + 675, true],[canvas.height-200,80 + 675, true],[canvas.height-200,100 + 675, true], [canvas.height-200,120 + 675, true], [canvas.height-200,140 + 675, true],
				[canvas.height-180,20 + 675, true],[canvas.height-180,40 + 675, true],[canvas.height-180,60 + 675, true],[canvas.height-180,80 + 675, true],[canvas.height-180,100 + 675, true], [canvas.height-180,120 + 675, true], [canvas.height-180,140 + 675, true],[canvas.height-180,160 + 675, true],
				[canvas.height-160,20 + 675, true],[canvas.height-160,40 + 675, true],[canvas.height-160,60 + 675, true],[canvas.height-160,80 + 675, true],[canvas.height-160,100 + 675, true], [canvas.height-160,120 + 675, true], [canvas.height-160,140 + 675, true],[canvas.height-160,160 + 675, true],
				[canvas.height-140,20 + 675, true],[canvas.height-140,40 + 675, true],[canvas.height-140,60 + 675, true],[canvas.height-140,80 + 675, true],[canvas.height-140,100 + 675, true], [canvas.height-140,120 + 675, true], [canvas.height-140,140 + 675, true],[canvas.height-140,160 + 675, true]
				]

var enright = true;

update();
function update(){
if (lives > 0){
	requestAnimationFrame(update);	
	context.clearRect ( 0 , 0 , canvas.width, canvas.height );


	if (left == true){
		if(xcoord > 0) {
			xcoord = xcoord - 5;
		}
	}

	if (right == true){
		if(xcoord <= (canvas.width - 50)) {
			xcoord = xcoord + 5;
		}
	}

	context.fillStyle = "green"; //sets the colour to green
	context.fillRect(xcoord,ycoord,50,50); // draws a green filled square
	var enemiesdown = 0;
	for (i = 0; i < enemylist.length; i++){
		if (enemylist[i][2] == false ){
			enemiesdown = enemiesdown + 1;
		}
	}
	if (enemiesdown == enemylist.length){
		enemiesDead();
	}else if ( enemylist.length - enemiesdown <= 1){
		enemyspeed = 6;
	}else if ( enemylist.length - enemiesdown <= 3){
		enemyspeed = 4;
	}else if (enemylist.length - enemiesdown <= 15){
		enemyspeed = 2;
	}
	if (godown == true){
		for (i = 0; i < enemylist.length; i++){
			if (enemylist[i][2] == true ){
				enemylist[i][0] = enemylist[i][0] + 10;
				if (enemylist[i][3] == 30){
					context.fillStyle = "red";
				}else if (enemylist[i][3] == 20){
					context.fillStyle = "blue";
				}else if (enemylist[i][3] == 10){
					context.fillStyle = "purple";
				}
				context.fillRect(enemylist[i][1],enemylist[i][0],50,50);
				
				if (enemylist[i][0] + 50 >= ycoord) {
					death();
					if (lives> 0){
						resetGame();
					}
					break;
				}
			}
			
		}
		godown = false;
		if (enright == true){
			enright = false;
		} else if (enright == false){
			enright = true;
		}
	}
	
	for (i = 0; i < enemylist.length; i++){
		if (enemylist[i][2] == true){
			if (enright == true){
				enemylist[i][1] = enemylist[i][1] + enemyspeed;
				if (enemylist[i][1] >= ( canvas.width - 50)){
					
					godown = true;
				}
			} else if (enright == false) {
				enemylist[i][1] = enemylist[i][1] - enemyspeed;
				if (enemylist[i][1] <= 0){
					
					godown = true;
					//enemylist[i][1] = enemylist[i][1] + 5;
				}
			}
			if (enemylist[i][3] == 30){
				context.fillStyle = "red";
			}else if (enemylist[i][3] == 20){
				context.fillStyle = "blue";
			}else if (enemylist[i][3] == 10){
				context.fillStyle = "purple";
			}
			
			context.fillRect(enemylist[i][1],enemylist[i][0],50,50);
		}
		if (xcoord >= enemylist[i][1] && xcoord <= enemylist[i][1] + 50 && ycoord >= enemylist[i][0] && ycoord <= enemylist[i][0] + 50 ||
			enemylist[i][1] >= xcoord && enemylist[i][1] <= xcoord + 10 && enemylist[i][0] >= ycoord && enemylist[i][0] <= ycoord + 30 ){
			death();
		}
		
		
	}
	aliveens();
	if(enshot == false ){
		enemyShot();
	} else if (enshot == true){
		enycoord = enycoord + 5;
		context.fillStyle = "black"; //sets the colour to green
		context.fillRect(enxcoord,enycoord ,10,20);
		for (i = 0; i < barrier.length; i++){
			if ( barrier[i][2] == true ){
					if (enxcoord >=  barrier[i][1] && enxcoord <=  barrier[i][1] + 20 && enycoord >=  barrier[i][0] && enycoord <=  barrier[i][0] + 20 ||
					 barrier[i][1] >= enxcoord &&  barrier[i][1] <= enxcoord + 10 &&  barrier[i][0] >= enycoord &&  barrier[i][0] <= enycoord + 20 
					){
						barrier[i][2] = false;
						enshot = false;
					}
				}
		}
		
		if (enycoord >= canvas.height-20){
			enshot = false;
		}
	}
	
	
	
	if (shot == true ){
	 if (bulycoord <= 0){
			shot = false;
	 } else {
			bulycoord = bulycoord - 10;
			context.fillStyle = "yellow"; //sets the colour to green
			context.fillRect(bulxcoord,bulycoord ,10,30);
			for (i = 0; i < barrier.length; i++){
				if ( barrier[i][2] == true ){
						if (bulxcoord >=  barrier[i][1] && bulxcoord <=  barrier[i][1] + 20 && bulycoord >=  barrier[i][0] && bulycoord <=  barrier[i][0] + 20 ||
						 barrier[i][1] >= bulxcoord &&  barrier[i][1] <= bulxcoord + 10 &&  barrier[i][0] >= bulycoord &&  barrier[i][0] <= bulycoord + 30 
						){
							barrier[i][2] = false;
							shot = false;
						}
					}
			}
		
			
			for (i = 0; i < enemylist.length; i++){
				if (enemylist[i][2] == true ){
					if (bulxcoord >= enemylist[i][1] && bulxcoord <= enemylist[i][1] + 50 && bulycoord >= enemylist[i][0] && bulycoord <= enemylist[i][0] + 50 ||
					enemylist[i][1] >= bulxcoord && enemylist[i][1] <= bulxcoord + 10 && enemylist[i][0] >= bulycoord && enemylist[i][0] <= bulycoord + 30 
					){
						enemylist[i][2] = false;
						shot = false;
						score = score + enemylist[i][3];
						expsnd.play();
					}
				}	
			}
			
			
	 }
	}
	
	for (i = 0; i < barrier.length; i++){
		if (barrier[i][2] == true){
			context.fillStyle = "green"
			context.fillRect(barrier[i][1],barrier[i][0],20,20);
		}
	}

	context.font = "20px Arial";
	context.fillStyle = "green";
	context.fillText("High Score: " + score, 10, canvas.height - 20); 
	context.fillStyle = "black";
	for (i = 0; i < lives; i++){
		context.fillRect(canvas.width - ((20*(5-i)) + (5*(5-i))), canvas.height - 35, 20,20);
	}
	context.fillText("Lives: ", canvas.width - (60 + (25 * 5)), canvas.height - 20); 
	context.stroke;
}
}
function enemiesDead(){
	resetGame();
}
function death(){
	lives = lives - 1;
	xcoord = canvas.width/2;
	if (lives == 0){
		context.font = "50px Arial";
		context.fillStyle = "red";
		context.fillText("Game Over", canvas.width/2, canvas.height/2); 
	}
	
}
function aliveens(){
	alivelist = [];
	for (i = enemylist.length - 1; i >= 0; i--){
		if (enemylist[i][2] == true ){
			var notin = true;
			for (x = 0; x < alivelist.length; x++){
				if (enemylist[i][1] == alivelist[x][1]){
					notin = false;
				}
			}
			if (notin ==true){
				alivelist.push(enemylist[i]);
			}
			
		}
	}
}
function enemyShot(){
	var ran = Math.floor( Math.random() * (alivelist.length - 1));
	enshot = true;
	enycoord = alivelist[ran][0]+ 50;
	enxcoord = alivelist[ran][1]+ 25;
}
function resetGame(){
	godown = false;
	enright = true;
	enshot = false;
	shot = false;
	for (i = 0; i < barrier.length; i++){
		barrier[i][2] = true;
	}
	enemylist = [ [50, 0, true,30], [50, 55 , true,30], [50, 110, true,30],[50, 165, true,30],[50, 220, true,30],[50, 275, true,30],[50, 330, true,30],[50, 385, true,30],[50, 440, true,30],[50, 495, true,30],[50, 550, true,30],
[105, 0, true,20], [105, 55 , true,20], [105, 110, true,20],[105, 165, true,20],[105, 220, true,20],[105, 275, true,20],[105, 330, true,20],[105, 385, true,20],[105, 440, true,20],[105, 495, true,20],[105, 550, true,20],
[160, 0, true,20], [160, 55 , true,20], [160, 110, true,20],[160, 165, true,20],[160, 220, true,20],[160, 275, true,20],[160, 330, true,20],[160, 385, true,20],[160, 440, true,20],[160, 495, true,20],[160, 550, true,20],
[215, 0, true,10], [215, 55 , true,10], [215, 110, true,10],[215, 165, true,10],[215, 220, true,10],[215, 275, true,10],[215, 330, true,10],[215, 385, true,10],[215, 440, true,10],[215, 495, true,10],[215, 550, true,10],
[270, 0, true,10], [270, 55 , true,10], [270, 110, true,10],[270, 165, true,10],[270, 220, true,10],[270, 275, true,10],[270, 330, true,10],[270, 385, true,10],[270, 440, true,10],[270, 495, true,10],[270, 550, true,10]
];
enemyspeed = 1;
}

function upkey(evt) { //Key is let go
	switch (evt.keyCode) {

		case 37: //Left Arrow Key
		left = false;
		break;

		case 39: //right arrow key
		right = false;
		break;
	}
}

function downkey(evt) { //Key is being held down
	switch (evt.keyCode) {
		case 32: //Left Arrow Key
		if (shot == false){
			bulxcoord = xcoord + 20;
			bulycoord = canvas.height - 125;
			shot = true;
			context.fillStyle = "yellow"; //sets the colour to green
			context.fillRect(bulxcoord,bulycoord ,10,30);
			shotsnd.play();
		}
		break;

		case 37: //Left Arrow Key
		left = true;
		break;

		case 39: //right arrow key
		right = true;
		break;
	}
}

}