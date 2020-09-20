class Bin{
    constructor(x,y){
        this.dustBinWidth = 200;
        this.dustBinHieght = 215;
        this.wallThickness = 20;
        this.image = loadImage("dustbingreen.png");
        this.bottom = Bodies.rectangle(x,y,this.dustBinWidth,this.wallThickness,{isStatic:true});
        this.leftWall = Bodies.rectangle(x-this.dustBinWidth/2,y-this.dustBinHieght/2,this.wallThickness,this.dustBinHieght,{isStatic:true});
        this.rightWall = Bodies.rectangle(x+this.dustBinWidth/2,y-this.dustBinHieght/2,this.wallThickness,this.dustBinHieght,{isStatic:true});
        
        World.add(world,this.bottom);
        World.add(world,this.leftWall);
        World.add(world,this.rightWall);

   

    }
    
    display() {
        var bottomPos = this.bottom.position;
        var leftPos = this.leftWall.position;
        var rightPos = this.rightWall.position;

        push();
        translate(leftPos.x,leftPos.y);
        angleMode(RADIANS);
        rotate(this.angle);
        pop();

        push();
        translate(rightPos.x,rightPos.y);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        pop();

        push();
        translate(bottomPos.x,bottomPos.y);
        angleMode(RADIANS);
        imageMode(CENTER);
        image(this.image,0,-this.dustBinHieght/2,this.dustBinWidth,this.dustBinHieght);
        pop();

    }

}