var util = require('util');
var _ = require('lodash');

module.exports.dump = function dump (o) {
	return util.inspect(o, { depth: null });
};

module.exports.sort = function sort (o, fn) {
	var keys = _.keys(o);
	keys.sort(fn);
	
	_.each(keys, function (k) {
			var v = o[k];
			delete o[k];
			o[k] = v;
		});
	
	return o;
};

module.exports.hasAll = function hasAll (o, props) {
	return _.every(props, function (v, k) {
		if (v) return _.has(o, v);
		else return _.has(o, k);
	});
},

// TODO: this is probably completely covered by _.where
module.exports.matchAll = function matchAll (o, probe) {
	return _.every(probe, function (v, k) {
		return o[k] && o[k] == v;
	});
}
