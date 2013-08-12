var util = require('util');
var _ = require('lodash');


function RetryError (errors) {
	// TODO: find the "main error", a la node-retry
	Error.call(this, errors[0]);
	this.errors = errs;
}

util.inherits(RetryError, Error);


function retry (fn, cb, delays) {

	var errs = [];
	var i = 0;
	
	function handle(err) {
		if (err) {
			errs.push(err);
			var t = delays[i++];
			if (_.isUndefined(t)
				cb(new RetryError(errs));
			else 
				setTimeout(attempt, t);
		} else
			cb.apply(null, arguments);
	}
	
	function attempt () {
		fn(handle);
	}
	
	attempt();

}

function exponential () {
}

function linear (tries, delay) {
	var out = [];
	for (var i=0; i<tries; i++)
		out[i] = (i+1) * delay;
	return out;
}

function linearTimout (tries, timeout) {
}

function fibonacci () {
}

function constant (tries, delay) {
	var out = [];
	for (var i=0; i<tries; i++)
		out[i] = delay;
	return out;
}

function constantTimeout (tries, timeout) {
	return constant(tries, timeout/tries);
}

module.exports = {
	retry: retry,
	strategies: {
		exponential: exponential,
		linear: linear,
		fibonacci: fibonacci,
		constant: constant
	}
};