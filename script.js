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
    ellipse(this.x, this.y, this.width, this.height);
      this.x= this.x + this.vx;
      this.y= this.y + this.vy; 
    

      if(this.x <= 0|| this.x >400){
        this.vx = this.vx * -1;
      }

    
     
      if(this.y <= 0 || this.x >= 300){
        this.vy = this.vy * -1;
      }
    }
  }

  var ball1, ball2, ball3;

  function setup(){
    createCanvas(400, 300);

    ball1 = new Ball(30, 200, 40, 40, 1, 1, "grey");
    ball2 = new Ball(120, 210, 20, 20, 5, 5, "yellow");
    ball3 = new Ball(200, 150, 10, 10, 4, 4, "green");
    ball4 = new Ball(10, 20, 35, 35, 7, 7, "indigo");
    ball5 = new Ball(20, 10, 30, 30, 4, 4, "white");
    ball6 = new Ball(300, 70, 25, 25, 8, 8, "red");
  }

  function draw(){
    background("lightblue");

    ball1.drawBall();
    ball2.drawBall();
    ball3.drawBall();
    ball4.drawBall();
    ball5.drawBall();
    ball6.drawBall();
  }






 
