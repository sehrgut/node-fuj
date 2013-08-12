var randfloat = require('../../math').randfloat;

function Randomize (strategy, factor) {
	this.strategy = strategy;
	this.factor = factor;
}

Randomize.prototype.next = function () {
	var k = 1 + randfloat(-this.factor, this.factor);
	var t = this.strategy.next();
	return t ? t * k : null;
};

Randomize.prototype.reset = function () {
	this.strategy.reset;
};

module.exports = Randomize;