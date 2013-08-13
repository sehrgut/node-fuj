var _ = require('lodash');

function RetryError (errors) {
	this.main_error = _(errors).groupBy('message').max('length').first();
	Error.call(this, "Main error: " + this.main_error.message);
	this.errors = errs;
}

util.inherits(RetryError, Error);

module.exports = RetryError;