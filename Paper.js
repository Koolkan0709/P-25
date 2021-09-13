class Paper{
	constructor(x,y,r)
	{
		var options = {
            isStatic:false,
			'density' : 12,
			'friction' : 0.9,
			'restitution' : 0.8
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("gray");
			fill("white");
			ellipseMode(CENTER)
			ellipse(0, 0, this.r, this.r);
			pop()
	}

}