var fib = require('../../math').fib;

function Fibonacci (min, max, factor) {
	this._n = 0;
	this.min = min;
	this.max = max;
	this.factor = factor ? factor : 1;
}

Fibonacci.prototype.next = function () {
	if (this._curr >= this.max)
		return null;
	
	this._curr = this.factor * fib(++this._n) * this.min;
	return Math.max(Math.min(this._curr, this.max), this.min);
};

Fibonacci.prototype.reset = function () {
	this._n = 0;
	delete this._curr;
};


module.exports = Fibonacci;

