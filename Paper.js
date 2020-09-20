class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        } 

        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world,this.body);
        this.image = loadImage("paper.png");

    }
    display(){
        var pos = this.body.position;
        console.log(pos.x + " " + pos.y);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("white");
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}