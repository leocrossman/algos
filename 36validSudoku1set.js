/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const size = board.length;
	const set = generateContainer(size)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const num = board[i][j] === '.' ? null : board[i][j];
      // proceed if a num is in this cell
      if (num) {
        const boxNum = getBoxNum(i, j)

				const col =
        // check if current col or row or box has val
        if (set.has(num) || col.has(num) || box.has(num)) return false;
        set.add();
        set.add(`col:${j} ${num}`);
        set.add(`box:${box} ${num}`);
      }
    }
  }
  return true;
  function getBoxNum(i, j) {
    return 3 * Math.floor(i / 3) + Math.floor(j / 3);
  }
};

const generateContainer = size => {
  return [...Array(size).keys()].reduce((cols, i) => {
    cols[i] = new Set();
    return cols;
  }, {});
};

const boardGood = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]; // valid -> true
// boardBad = [
//   ['5', '5', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ]; // valid -> false
const boardBad = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
]; // false
const isValid = isValidSudoku(boardBad);
console.log(isValid);
