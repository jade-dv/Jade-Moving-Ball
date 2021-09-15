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
    ellipse(this.x, this.y, this.width, this.height){
      this.width= 50;
      this.height= 50;
      this.x= this.x + this.vx;
      this.y= this.y + this.vy; 

    }
    
  }

  var ball1, ball2, ball3;

  function setup(){

    ball1 = new Ball(275, )
    ball2 = new Ball()
  }
}





 
