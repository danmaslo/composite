const Vector = require('./Vector.js');

class Circle {
	// constructor
    constructor(c, r) {
		this._center = c;
		this._radius = r;
    }


	// constants
	static get NORMAL() {
		return(new Circle(new Vector(0, 0), 1.0));
	}


	// getters and setters
	getCenter() {
		return this._center;
	}

	setCenter(c) {
		this._center = Vector.copyConstructor(c);
	}

	getRadius() {
		return this._radius;
	}

	setRadius(r) {
		this._radius = r;
	}


	// public methods
	getArea() {
		return(Math.PI * this._radius * this._radius);
	}

	getMinX() {
		return(this._center.getX() - this._radius);
	}

	getMinY() {
		return(this._center.getY() - this._radius);
	}

	getMaxX() {
		return(this._center.getX() + this._radius);
	}

	getMaxY() {
		return(this._center.getY() + this._radius);
	}

	move(v) {
		this._center.add(v);
	}

	toSvg() {
		return("\t<circle cx=\"" + this._center.getX() + "\" cy=\"" + this._center.getY() + "\" r =\"" + this._radius + "\" fill=\"rgb(0, 0, 0)\" stroke=\"none\" stroke-width=\"0\" />\n");
	}

	// static method
	static coordsConstructor(x, y, r) {
		return(new Circle(new Vector(x, y), r));
	}

	static copyConstructor(c) {
		return(new Circle(new Vector(c.getCenter().getX(), c.getCenter().getY()), c.getRadius()));
	}

	static distance(c1, c2) {
		var v = Vector.vectorsConstructor(c1.getCenter(), c2.getCenter());

		return(Vector.gainSize(v) - c1.getRadius() - c2.getRadius());
	}

	static isOverlap(c1, c2) {
		if (Vector.distanceSquared(c1.getCenter(), c2.getCenter()) >= ((c1.getRadius() + c2.getRadius()) * (c1.getRadius() + c2.getRadius()))) {
            return(false);
        }
        else {
            return(true);
        }
	}
}

module.exports = Circle;
