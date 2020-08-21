class Bubble{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width; 
        this.bubble = createSprite(this.x,this.y,this.width,this.height);
       this.image = ballArr[Math.round(random(0,9))];
      // this.bubble.addImage(ballArr[Math.round(random(0,9))]);
    }

    bubbleImg(){
        this.bubble.addImage( this.image);
        this.bubble.scale = 0.7;
    }
}