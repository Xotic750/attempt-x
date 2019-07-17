/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
const attempt = function attempt(fn, ...args) {
  try {
    return {
      threw: false,
      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args),
    };
  } catch (e) {
    return {
      threw: true,
      value: e,
    };
  }
};

export default attempt;
