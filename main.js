const Vector = require('./lib/2d/Vector.js');
const Circle = require('./lib/2d/Circle.js');
const Composite = require('./lib/2d/Composite.js');

var c = new Composite({
	"width": 200,
	"height": 200,
	"bounds": Composite.NON_PERIODIC
});

c.generate({
	"until": { // stop when reach first of something
		"tries": 1000000, // number of random particles
		"time": 300 // number of seconds
	},
	"method": Composite.PIC,
	"particles": [
		{
			"radius": 4.0,
			"probability": 1
		}
	]
});
/*
c.generate({
	"until": { // stop when reach first of something
		"tries": 10000000, // number of random particles
		"time": 300 // number of seconds
	},
	"method": Composite.PIC,
	"particles": [
		{
			"radius": 4.0,
			"probability": 0.5
		},
		{
			"radius": 2.0,
			"probability": 0.25
		},
		{
			"radius": 1.0,
			"probability": 0.125
		},
		{
			"radius": 0.5,
			"probability": 0.0625
		},
		// tricky radius only for probability sum == 1
		{
			"radius": 1000,
			"probability": 0.0625
		}
	]
});
*/

c.export({
	"type": Composite.EXPORT_SVG,
	"file": "renders/preSAVE"
});

c.saveTxt("saves/comp");
c.loadTxt("saves/comp");

c.export({
	"type": Composite.EXPORT_SVG,
	"file": "renders/postLOAD"
});
