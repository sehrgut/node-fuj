function Linear (min, max, factor) {
	this._n = 0;
	this.min = min;
	this.max = max;
	this.factor = factor;
}

Linear.prototype.next = function () {
	if (this._curr >= this.max)
		return null;
	
	this._curr = this.factor * this._n * this.min;
	return Math.max(this.min, Math.min(this._curr, this.max));
};

Linear.prototype.reset = function () {
	this._n = 0;
	delete this._curr;
};

module.exports = Linear;