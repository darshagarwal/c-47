var paddle;
var bubble = [];
var ball;
var edges;
var backgroundImg;
var ballimg1,ballimg2,ballimg3,ballimg4,ballimg5,ballimg6,ballimg7,ballimg8,ballimg9,ballimg10;
var score = 0;
var ballArr;
var ghost,ghost1;
function preload(){
	backgroundImg = loadImage("backgroud.jpg");
	ballimg1 = loadImage("beigeBall.png");
	ballimg2 = loadImage("blackBall.png");
	ballimg3 = loadImage("blackishBrownBall.png");
	ballimg4 = loadImage("chocolateBrownBall.png");
	ballimg5 = loadImage("darkBlueBall.png");
	ballimg6 = loadImage("darkBrownBall.png");
	ballimg7 = loadImage("gerrnBall.png");
	ballimg8 = loadImage("greyBall.png");
	ballimg9 = loadImage("lightBrownBall.png");
	ballimg10 = loadImage("peachBall.png");
}

function setup() {

	ballArr = [ballimg1,ballimg2,ballimg3,ballimg4,ballimg5,ballimg6,ballimg7,ballimg8,ballimg9,ballimg10];
	createCanvas(1000, 1050);
	//Create object for paddle.
	paddle = new Paddle(400,900,150,30);
	paddle.display();

	//create object for ball.
	ball = createSprite(450,900,30,30);
	ball.addImage(ballArr[Math.round(random(0,9))]);
	ball.scale = 0.7;

	//bubble = new Bubble(400,200,80);
	for(var k = 0; k<=width; k = k+65){
        var bubbleObj = new Bubble(k,height-1800/2,70,20);
        bubbleObj.bubbleImg();
		bubble.push(bubbleObj);
	}
	
	for(var k = 0; k<=width; k = k+65){
        var bubbleObj = new Bubble(k,height-1600/2,70,20);
        bubbleObj.bubbleImg();
		bubble.push(bubbleObj);
	}

	for(var k = 0; k<=width; k = k+65){
        var bubbleObj = new Bubble(k,height-1400/2,70,20);
        bubbleObj.bubbleImg();
		bubble.push(bubbleObj);
	}

	for(var k = 0; k<=width; k = k+65){
        var bubbleObj = new Bubble(k,height-1200/2,70,20);
        bubbleObj.bubbleImg();
		bubble.push(bubbleObj);
	}

	edges = createEdgeSprites();

	for(var temp in bubble){
		var d = int(dist(ball.x,ball.y,bubble[temp].x,bubble[temp].y));
		if(d <10){
		//console.log(d);
		}
	}	

	// to create a ghost
	ghost = createSprite(500,600,50,100);
	ghost.addImage("ghost right.png");
}


function draw() {
  background(backgroundImg);
	fill("blue");

	if(keyDown("space") && ball.velocityX === 0 && ball.velocityY === 0){
		ball.velocityX = 1;
		ball.velocityY = -8;
	}

	ball.bounceOff(edges[0]);
	ball.bounceOff(edges[1]);
	ball.bounceOff(edges[2]);
	//ball.bounceOff(edges[3]);
	ball.bounceOff(paddle.paddle);
    
    for(var temp in bubble){
       // console.log(bubble[temp].bubble);
		if(ball.bounceOff(bubble[temp].bubble)){
			console.log("hi");
			//ball.velocityX = 0;
			//ball.velocityY = 0;
			score += 5
		}
	}

	if(ball.bounceOff(paddle.paddle)){
		ball.addImage(ballArr[Math.round(random(0,9))]);
		ball.scale = 0.7;
	}

	if(keyDown("right")){
		this.paddle.paddle.x += 10;
	}

	if(keyDown("left")){
		this.paddle.paddle.x -= 10;
	}

	if(score >= 100){
	if(keyDown("m")){
		ball.addImage("mega ball 1.png");

	}
   }else if(score !== 100){
	   if(keyDown("m")){
		   textSize(30)
		   text("Note:" + "If you want to use 'Mega Ball' you will loose 50 points",25, 1000)
	   }
   }

   if(ball.y >= 1050){
	   textSize(30);
	   text("GAME OVER!!",350,700)
   }

	textSize(40);
	text("Score" + score,50,50);
	textSize(30);
	text("NOTE:" + "Press 'm' key when the ghost arrive",25,950);

	drawSprites();
}



