class Paddle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.paddle = createSprite(this.x,this.y,this.width,this.height);
        this.image = loadImage("paddle.png");
    }

    display(){
       // imageMode(CENTER);
        this.paddle.addImage(this.image);
        this.paddle.scale = 0.2;
    }
}