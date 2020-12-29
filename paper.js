class Paper {
    constructor(x,y){
        var paper_options ={

            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          
          }
          
        this.body = Bodies.circle(x, y, 30, paper_options);
        
        World.add(world, this.body);
    }
  
      display() {

       fill("orange");
       ellipseMode(RADIUS);
       ellipse(this.body.position.x, this.body.position.y, 30, 30)
       this.body.position.x = mouseX;
       this.body.position.y = mouseY;
  
    }
  }
  