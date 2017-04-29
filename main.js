const Vector = require('./lib/2d/Vector.js');
const Circle = require('./lib/2d/Circle.js');
const Composite = require('./lib/2d/Composite.js');

const w = 300;
const h = 300;

var c = new Composite(w, h);

for (var i = 0; i < 10000000; i++) {
	var x = w * Math.random();
	var y = h * Math.random();
	var r = 1.0;

	c.add(new Circle(new Vector(x, y), r));
}

/*
for (var i = 0; i < 1000; i++) {
	var x = w * Math.random();
	var y = h * Math.random();
	var r = 10.0;

	c.add(new Circle(new Vector(x, y), r));
}

for (var i = 0; i < 1000; i++) {
	var x = w * Math.random();
	var y = h * Math.random();
	var r = 1.0;

	c.add(new Circle(new Vector(x, y), r));
}
*/

c.saveSvg("renders/300x300__1");
