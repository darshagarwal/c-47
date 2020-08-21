class Bubble{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius; 
       this.image = ballArr[Math.round(random(0,9))];
    }

    display(){
       // console.log(this.x,this.y);
        image(this.image,this.x,this.y,this.radius,this.radius);
    }
}