var util = require('util');

module.exports.dump = function dump (o) {
	return util.inspect(o, { depth: null });
}
