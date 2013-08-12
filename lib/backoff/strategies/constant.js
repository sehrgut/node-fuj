
function Constant (t) {
	this.t = t;
}

Constant.prototype.next = function () {
	return t;
};

Constant.prototype.reset = function () {};

module.exports = Constant;