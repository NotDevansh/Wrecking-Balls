class Rope 
{
  constructor(bodyA,pointB)
  {
    var options = 
    {
      bodyA:bodyA,
      pointB:pointB,
      length:250,
      stifness:1.2

    }
    this.pointB = pointB
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
  }
  display()
  {
    var ptA=this.rope.bodyA.position;
    var ptB=this.pointB;
    push();
    stroke("lime");
    strokeWeight(3);
    line(ptB.x,ptB.y,ptA.x,ptA.y,)
    pop();
  }
}