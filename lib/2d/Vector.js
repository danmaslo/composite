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
	getX() {
		return this._x;
	}

	setX(x) {
		this._x = x;
	}

	getY() {
		return this._y;
	}

	setY(y) {
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
		this._x += v.getX();
		this._y += v.getY();
	}


	// static method
	static vectorsConstructor(v1, v2) {
		return(new Vector(v2.getX() - v1.getX(), v2.getY() - v1.getY()));
	}

	static copyConstructor(v) {
		return(new Vector(v.getX(), v.getY()));
	}

	static gainSize(v) {
		return(Math.sqrt(v.getX() * v.getX() + v.getY() * v.getY()));
	}

	static gainSizeSquared(v) {
		return(v.getX() * v.getX() + v.getY() * v.getY());
	}

	static sum() {
        var x = 0;
        var y = 0;

        for (let i = 0; i < arguments.length; i++) {
            x += arguments[i].getX();
            y += arguments[i].getY();
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
