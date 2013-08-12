function Exponential (min, max, mantissa) {
	this._n = 0;
	this.min = min;
	this.max = max;
	this.mantissa = mantissa;
	this._prev = null;
}

Exponential.prototype.next = function () {
	if (this._curr >= this.max)
		return null;
	
	this._curr = this.min * Math.pow(this.mantissa, ++this._n);
	
	return Math.min(this._curr, this.max);
};

Exponential.prototype.reset = function () {
	this._n = 0;
	delete this._curr;
};

module.exports = Exponential;