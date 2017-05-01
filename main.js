const Vector = require('./lib/2d/Vector.js');
const Circle = require('./lib/2d/Circle.js');
const Composite = require('./lib/2d/Composite.js');

var c = new Composite({
	"width": 100,
	"height": 100,
	"bounds": Composite.NON_PERIODIC
});

c.generate({
	"until": { // stop when reach first of something
		"tries": 10000 // number of random particles
	},
	"method": Composite.PIC,
	"particles": [
		{
			"radius": 1,
			"probability": 0.5
		},
		{
			"radius": 2,
			"probability": 0.25
		},
		{
			"radius": 3,
			"probability": 0.25
		}
	]
});

c.saveSvg("renders/sample");

/*
for (var i = 0; i < 100000; i++) {
	var x = 100 * Math.random();
	var y = 100 * Math.random();
	var r = 1.0;

	c.add(new Circle(new Vector(x, y), r));
}

c.saveSvg("renders/100x100-periodic__1");
*/


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
