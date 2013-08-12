var fuj = require('../');

var o = {
	z: true,
	x: true,
	a: true,
	b: true
};

console.log(fuj.object.dump(fuj.object.sort(o)));