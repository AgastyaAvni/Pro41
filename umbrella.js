class Umbrella{


    constructor(x,y,r){

        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this,body);
        this.image=loadImage("images/Walking Frame/walking_1.png")
        this.r =r;

    }
       

    display(){

        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);


    }



    
}