class Vector {
	// constructor
    constructor(x, y) {
		this._x = x;
		this._y = y;
    }


	// constants
	static get I() {
		return(new Vector(1, 0));
	}

	static get J() {
		return(new Vector(0, 1));
	}


	// getters and setters
	get x() {
		return this._x;
	}

	set x(x) {
		this._x = x;
	}

	get y() {
		return this._y;
	}

	set y(y) {
		this._y = y;
	}


	// public methods
	getSize() {
		return(Math.sqrt(this._x * this._x + this._y * this._y));
	}

	getSizeSquared() {
		return(this._x * this._x + this._y * this._y);
	}

	inverse() {
		this._x *= -1;
		this._y *= -1;
	}

	scale(coef) {
		this._x *= coef;
		this._y *= coef;
	}

	setSize(size) {
		this.scale(size/this.getSize());
	}

	add(v) {
		this._x += v.x;
		this._y += v.y;
	}


	// static method
	static vectorsConstructor(v1, v2) {
		return(new Vector(v2.x - v1.x, v2.y - v1.y));
	}

	static copyConstructor(v) {
		return(new Vector(v.x, v.y));
	}

	static gainSize(v) {
		return(Math.sqrt(v.x * v.x + v.y * v.y));
	}

	static gainSizeSquared(v) {
		return(v.x * v.x + v.y * v.y);
	}

	static sum() {
        var x = 0;
        var y = 0;

        for (let i = 0; i < arguments.length; i++) {
            x += arguments[i].x;
            y += arguments[i].y;
        }

		return(new Vector(x, y));
	}

	static distance(v1, v2) {
		return(Vector.gainSize(Vector.vectorsConstructor(v1, v2)));
	}

	static distanceSquared(v1, v2) {
		return(Vector.gainSizeSquared(Vector.vectorsConstructor(v1, v2)));
	}
}

module.exports = Vector;
