class Drop{
constructor(x,y){
    var options={
        friction:0.1,
        restitution:0.5
    }
this.rain= Bodies.circle(x,y,5,options)
World.add(world,this.rain);
}

}