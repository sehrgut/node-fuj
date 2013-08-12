var _ = require('lodash');
var fibs = [];

function fib (n) {
	var f = fibs[n];
	
	if (_.isUndefined(f)) {
		switch (n) {
			case 0:
			case 1:
				f = n;
				break;
			default:
				f = fib(n-1) + fib(n-2);
		}
		fibs[n] = f;
	}
	return f;
}

function randfloat (min, max) {
	return min + (Math.random() * (max - min));
}

function randint (min, max) {
	return Math.floor(min) + (Math.floor(Math.random() * (max - min + 1)));
}

module.exports = {
	fib: fib,
	randint: randint,
	randfloat: randfloat
};