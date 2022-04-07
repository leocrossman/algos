/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//   if (n < 0) return 1 / myPow(x, -n);
//   if (n === 0) return 1;
//   return x * myPow(x, n - 1);
// };

function myPow(base, power, res = 1) {
  if (power === 0) return 1;
  if (power === 1) return base * res;
  return myPow(base, --power, base * res);
}

const memo = (f) => {
  const cache = {};
  // if cache.hasOwn
};

//console.log(myPow(0.00001, 2147483647));
console.log(myPow(2, 4));
