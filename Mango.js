class Mango{
    constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			
			}
		this.x=x;
		this.y=y;
		this.r=r

		this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.image = loadImage("mango.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
		
			pop()
			
	}

}
