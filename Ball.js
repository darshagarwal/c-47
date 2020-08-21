class Ball{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;  
        createSprite(this.x,this.y,this.radius,this.radius);      
    }

    display(){
       // ellipse(this.x,this.y,this.radius,this.radius);
       drawSprites();
    }

    bounceBall(){
        if(keyDown("space")){
            this.ball.velocityX = 2;
            this.ball.velocityY = -3;
        }
    }
}