function curry(fn, arity = fn.length) {
	return function curried(...args) {
		if (args.length >= arity) return fn.apply(this, args);

		return (...next) => curried.apply(this, [...args, ...next]);
	};
}

export default curry;
