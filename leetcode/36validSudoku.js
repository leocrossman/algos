/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const size = board.length;
  const cols = generateContainer(size);
  const boxes = generateContainer(size);
  for (let i = 0; i < size; i++) {
    const row = new Set();
    for (let j = 0; j < size; j++) {
      const col = cols[j];
      const num = board[i][j] === '.' ? null : board[i][j];
      // proceed if a num is in this cell
      if (num) {
        const [currBoxHasNum, box] = boxHasNumAndGetBox(num, i, j);
        if (currBoxHasNum) return false;
        // check if current col or row or box has val
        if (row.has(num) || col.has(num) || box.has(num)) return false;
        col.add(num);
        row.add(num);
        box.add(num);
      }
    }
  }
  return true;
  function boxHasNumAndGetBox(num, i, j) {
    let hasNum = false;
    let boxNum;
    if (i <= 2 && j <= 2) {
      // boxes[0].add(num);
      boxNum = 0;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 2 && j <= 5) {
      boxNum = 1;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 2 && j <= 8) {
      boxNum = 2;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 5 && j <= 2) {
      boxNum = 3;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 5 && j <= 5) {
      boxNum = 4;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 5 && j <= 8) {
      boxNum = 5;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 8 && j <= 2) {
      boxNum = 6;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 8 && j <= 5) {
      boxNum = 7;
      hasNum = boxes[boxNum].has(num);
    } else if (i <= 8 && j <= 8) {
      boxNum = 8;
      hasNum = boxes[boxNum].has(num);
    }
    return [hasNum, boxes[boxNum]];
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
