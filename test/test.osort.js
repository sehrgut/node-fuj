var fuj = require('../');

var o = {
	z: true,
	x: true,
	a: true,
	b: true
};

console.log(fuj.dump(fuj.osort(o)));