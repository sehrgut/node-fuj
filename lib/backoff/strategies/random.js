var mr = require('../../math');

/*
 * TODO: gaussian? how to use % factor
 */

function gaussAbout (x, pct) {
	return mr.randgauss(x, Math.abs(x * pct));
}

function Randomize (strategy, factor) {
	this.strategy = strategy;
	this.factor = factor;
}

Randomize.prototype.next = function () {
	var k = 1 + mr.randfloat(-this.factor, this.factor);
	var t = this.strategy.next();
	return t ? t * k : null;
};

Randomize.prototype.reset = function () {
	this.strategy.reset;
};

module.exports = Randomize;