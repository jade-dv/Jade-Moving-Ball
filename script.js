var x, y, vx, vy;

function setup(){
  createCanvas(500, 400);

  x=0;
  y=200;
  vx=5;
  vy=2;
  }

  function draw(){
    background(0);
    
    ellipse(x, y, 50, 50)
    x = x + vx;
    y = y + vy;
    
    
    if(x <= 0 || x > 500){
      vx = vx *-1;
    }

    if(y <= 0 || y > 400){
      vy = vy *-1;
    }
  }

class Ball{

  constructor(x, y, w, h, vx, vy, _color){
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
    this.vx=vx;
    this.vy=vy;
    this.color=_color;
  }

  draw(){
    fill(this.color);
    ellipse(this.)
  }
}





 
