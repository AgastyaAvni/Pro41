class Drops {
    constructor(x, y, r) {
      var options = {
         
          'restitution':0,
          'friction':0.1,
          
      }
      
      this.r=r;

      this.body = Bodies.circle(x,y,this.r,options);
      
      World.add(world,this.body)

      
      World.add(world, this.body);
    }
    display(){

     push();

     translate(pos.x,pos.y)
    rotate(angale);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    elipse(0,0,this.r,this.r);
    
    pop();
    }
  };