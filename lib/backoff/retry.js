var Backoff = require('./backoff');
var RetryError = require('./retry-error');

function Retry (strategy) {
	this.backoff = new Backoff(strategy);
};

Retry.prototype.do = function (fn, cb) {
	var errs = [];
	
	function onTask (backoff, err) {
		if (err) {
			errs.push(err);
			if (! backoff.do(tryTask)) {
				backoff.reset();
				cb(new RetryError(errs))
			}
		} else {
			backoff.reset();
			cb.apply(null, Array.prototype.slice.call(arguments, 1));
		}
	}
	
	function tryTask (backoff) {
		fn(onTask.bind(this, backoff));
	}
	
	this.backoff.do(tryTask.bind(this));
};

module.exports = Retry;