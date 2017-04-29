const Vector = require('./Vector.js');

class Circle {
	// constructor
    constructor(c, r) {
		this._c = c;
		this._r = r;
    }


	// constants
	static get NORMAL() {
		return(new Circle(new Vector(0, 0), 1.0));
	}


	// getters and setters
	get c() {
		return this._c;
	}

	set c(c) {
		this._c = c;
	}

	get r() {
		return this._r;
	}

	set r(r) {
		this._r = r;
	}


	// public methods
	getArea() {
		return(Math.PI * this._r * this._r);
	}

	toSvg() {
		return("\t<circle cx=\"" + this.c.x + "\" cy=\"" + this.c.y + "\" r =\"" + this.r + "\" fill=\"rgb(0, 0, 0)\" stroke=\"none\" stroke-width=\"0\" />\n");
	}

	// static method
	static coordsConstructor(x, y, r) {
		return(new Circle(new Vector(x, y), r));
	}

	static copyConstructor(c) {
		return(new Circle(c.c, c.r));
	}

	static distance(c1, c2) {
		var v = Vector.vectorsConstructor(c1.c, c2.c);

		return(Vector.gainSize(v) - c1.r - c2.r);
	}

	static isOverlap(c1, c2) {
		if (Vector.distanceSquared(c1.c, c2.c) >= ((c1.r + c2.r) * (c1.r + c2.r))) {
            return(false);
        }
        else {
            return(true);
        }
	}
}

module.exports = Circle;
