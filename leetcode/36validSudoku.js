/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const size = board.length;
  const cols = generateContainer(size);
  const boxes = generateContainer(size);
  // const boxes = {}
  for (let i = 0; i < size; i++) {
    const row = new Set();
    const col = cols[i];
    for (let j = 0; j < size; j++) {
      const num = board[i][j] === '.' ? null : board[i][j];
      // proceed if a num is in this cell
      if (num) {
        // get ref to current box
        // --todo: ^
				if (i <= 2 && j <= 2) {
					boxes[0].add(num)
				}
        let boxNum;
        return;
        // for (let boxIdx = 0; boxIdx < Math.sqrt(size); boxIdx++) {
        //   if (i === 0 || i === )
        // }
        // check if current box has val
        // if (box.has(num))
        // check if current col or row has val
        if (row.has(num) || col.has(num)) return false;
        col.add(num);
        row.add(num);
      }
    }
  }

  // const row = isRowValid();
  // const col = isColValid();
  // const box = isBoxValid();
};

const generateContainer = (size) => {
  return [...Array(size).keys()].reduce((cols, i) => {
    cols[i] = new Set();
    return cols;
  }, {});
};
// const isRowValid = (row) => {};

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
boardBad = [
  ['5', '5', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]; // valid -> false
const isValid = isValidSudoku(boardGood);
console.log(isValid);
