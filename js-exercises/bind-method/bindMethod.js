function bind(func, obj) {
  return function bindFunction(...args) {
    return func.apply(obj, args);
  };
}
module.exports = { bind };
