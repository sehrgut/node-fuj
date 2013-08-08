var util = require('util');
var _ = require('lodash');

module.exports.dump = function dump (o) {
	return util.inspect(o, { depth: null });
};

module.exports.osort = function osort (o, fn) {
	_(o).keys().sortBy(fn)
		.each(function (k) {
			var v = o[k];
			delete o[k];
			o[k] = v;
		});
	
	return o;
};
