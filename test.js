const printNumbers = (num, curr = 0) => {
  console.log(curr);
  if (curr === num) {
    return curr;
  } else {
    return printNumbers(num, curr + 1);
  }
};
