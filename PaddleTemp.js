class Paddle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("paddle.png");
    }

    display(){
        image(this.image,this.x,this.y,this.width,this.height);
    }

    movePaddle(){
        if(keyDown("right")){
            this.x += 10;
        }

        if(keyDown("left")){
            this.x -= 10;
        }

    }
}