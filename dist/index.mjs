function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var add_1;
var hasRequiredAdd;

function requireAdd () {
	if (hasRequiredAdd) return add_1;
	hasRequiredAdd = 1;
	function add(...num) {
	  let sum = 0;
	  num.forEach((n) => sum += n);
	  return sum;
	}
	add_1 = { add };
	return add_1;
}

var sub_1;
var hasRequiredSub;

function requireSub () {
	if (hasRequiredSub) return sub_1;
	hasRequiredSub = 1;
	function sub(...num) {
	  let [first, ...others] = num;
	  others.forEach((n) => first -= n);
	  return first;
	}
	sub_1 = { sub };
	return sub_1;
}

var mul_1;
var hasRequiredMul;

function requireMul () {
	if (hasRequiredMul) return mul_1;
	hasRequiredMul = 1;
	function mul(...num) {
	  let out = 1;
	  num.forEach((n) => out *= n);
	  return out;
	}
	mul_1 = { mul };
	return mul_1;
}

var div_1;
var hasRequiredDiv;

function requireDiv () {
	if (hasRequiredDiv) return div_1;
	hasRequiredDiv = 1;
	function div(a, b) {
	  return a / b;
	}
	div_1 = { div };
	return div_1;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	const { add } = requireAdd();
	const { sub } = requireSub();
	const { mul } = requireMul();
	const { div } = requireDiv();
	src = { add, sub, mul, div };
	return src;
}

var srcExports = requireSrc();
const index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
