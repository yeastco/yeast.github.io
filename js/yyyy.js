var height = view.size.height;
var width = view.size.width;
var amount = 10	;

var center=new Point({
	x:100,
	y:60
});

var transformx=[];
var transformy=[];

var vertex=10;

for (i=0;i<vertex;i++){
	var transformation=Math.random()*10;
	transformx.push(transformation);
}
for (i=0;i<vertex;i++){
	var transformation=Math.random()*10;
	transformy.push(transformation);
}



function treeLine(r, p, v, s, i) {
	this.point=p;
	// this.radius=r;
	this.skew=s;
	this.order=i;
	this.path=new Path.RegularPolygon(this.point, vertex, 20);
	//this.path.strokeColor = new Color(10+this.order,0.4,0);
  this.path.fillColor=new Color(10+this.order,0.4,0);
  this.path.opacity=0.1;
	//this.path.strokeWidth = 10* 1/this.order;
	this.path.smooth();

	var num=this.path.segments.length;
	for (i=0;i<num; i++){
	this.path.segments[i].point.x=this.path.segments[i].point.x+transformx[i];
	}
	// this.path.segments[2].point.x=this.path.segments[2].point.x+transform[2];
	// this.path.segments[4].point.x=this.path.segments[4].point.x+transform[4];
	// this.path.segments[6].point.x=this.path.segments[6].point.x+transform[6];
	// this.path.segments[7].point.x=this.path.segments[7].point.x+transform[7];


		// this.path.segments[i].point.y=this.path.segments[i].point.y+seed;

	var scale = ((1 - this.order / amount) * 20)+ Math.random()*10;
	this.path.scale(scale);



	this.path.selected = false	;
}
treeLine.prototype={

	morphy: function(time){
		var sinus = Math.sin(time * 3+i);

		for (i=0;i<this.path.segments.length; i++){
			this.path.segments[i].point.y=this.path.segments[i].point.y+(transformy[i]*sinus/30);
		}
	},
	morphx: function(time){
		var sinus = Math.sin(time * 3);

		for (i=0;i<this.path.segments.length; i++){
			this.path.segments[i].point.x=this.path.segments[i].point.x+(transformx[i]*sinus/10);
		}
	},

	colShift: function(time){
		var sinus = Math.sin(time * 3);
		console.log(sinus);
    this.path.fillColor=new Color(0.8,0.5+sinus,0.3+sinus);
    //this.path.opacity=0.2;
		//this.path.strokeColor = new Color(10+this.order,0.2+sinus,0);
	},


}





var hitOptions = {
	segments: true,
	stroke: false,
	fill: false,
	tolerance: 5
};

var lines = [];
for (var i = 0; i < amount; i++) {

	var vector = new Point({
		angle: 360 * Math.random(),
		length:0
	});
	var skew=0;
	var radius = Math.random() * i + 5;
	lines.push(new treeLine(radius, center, vector,skew,i));
}

function onMouseDown(event) {
	// for (var i= 0; i < lines.length; i ++){ //start at the first column, where x = 0
	// 		var skew=i*2	;
	// 		lines[i].morph(skew);
	// 		//squares[i].wave(0.1+i/10);
	// }
}

function onFrame(event){
	for (var i= 0; i < lines.length; i ++){ //start at the first column, where x = 0
			lines[i].morphx(event.time/2+(i/500));
			lines[i].morphy(event.time/2+(i/500));
			lines[i].colShift(event.time/10+(i/100));
			//squares[i].wave(0.1+i/10);
	}

}
