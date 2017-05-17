const Vector = require('./lib/2d/Vector.js');
const Circle = require('./lib/2d/Circle.js');
const Composite = require('./lib/2d/Composite.js');

var c = new Composite({
	"width": 444,
	"height": 444,
	"bounds": Composite.NON_PERIODIC
});

c.generate({
	"until": { // stop when reach first of something
		"tries": 100000, // number of random particles
		"time": 60 // number of seconds
	},
	"method": Composite.PIC,
	"particles": [
		{
			"radius": 1,
			"probability": 1.0
		}
	]
});

c.export({
	"type": Composite.EXPORT_SVG,
	"file": "renders/sampleExport"
});

/*
process.stdout.write("Downloading 1 bytes\r");
process.stdout.write("Downloading 2 bytes\r");
process.stdout.write("Downloading 3 bytes\r");
process.stdout.write("Downloading 4 bytes\r");
process.stdout.write("Downloading 5 bytes");
*/
