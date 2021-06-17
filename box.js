class Box{
   constructor(x,y,width,hight){
   var c1={
   restitution : 1
   }
this.body=Bodies.rectangle(x,y,width,hight,c1);
this.width=width;
this.height=height;
World.add(world,this.body)
   }
   display(){
    var pos = this.body.position
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.y);
   }
}