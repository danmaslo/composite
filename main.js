const Vector = require('./lib/2d/Vector.js');
const Circle = require('./lib/2d/Circle.js');
const Composite = require('./lib/2d/Composite.js');

const w = 100;
const h = 100;
const b = Composite.PERIODIC;

var c = new Composite(w, h, b);

for (var i = 0; i < 100000; i++) {
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

c.saveSvg("renders/100x100-periodic__1");

/*
// ideal code
var c = new Composite({
	"width": 100,
	"height": 100,
	"bounds": Composite.PERIODIC
});

c.generate({
	"until": { // stop when reach first of something
		"time": 3600, // 1 hour
		"ff": 0.64, // filling factor
		"tries": 1000000 // number of random particles
	},
	"method": Composite.PIC,
	"particles": [
		{
			"particle": Circle.factory(0, 0, 1),
			"probability": 0.5
		},
		{
			"particle": Circle.factory(0, 0, 10),
			"probability": 0.5
		}
	]
});

c.export([
	{
		"name": "100x100__1",
		"type": Composite.EXPORT_SVG
	},
	{
		"name": "100x100__1",
		"type": Composite.EXPORT_TXT
	}
]);
*/
