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

  drawBall(){
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height){
      this.x= this.x + this.vx;
      this.y= this.y + this.vy; 

      if(this.x <= 0|| this. >=400){
        this.vx = this.vx * -1;
      }

    }
     
      if(this.y <= 0 || this.x >= 300){
        this.vy = this.vy * -1;

      }
    
  }

  var ball1, ball2, ball3;

  function setup(){

    ball1 = new Ball(275,  )
    ball2 = new Ball()
  }
}





 
