function Backoff (strategy) {
	this.strategy = strategy;
}

/* TODO: save timer and cancel */

Backoff.prototype.do = function (fn) {
	if (this._started) {
		var t = this.strategy.next();
		if (t)
			return setTimeout(fn.bind(null, this), t);
		return null;
	}

	this._started = true;
	return setTimeout(fn.bind(null, this), 0);
};

Backoff.prototype.reset = function () {
	this.strategy.reset();
	this._started = false;
};

module.exports = Backoff;