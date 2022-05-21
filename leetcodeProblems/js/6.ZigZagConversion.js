/*
! NOT DONE
6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (!s.length || s.length === 1) return s;
  let result = s[0];
  let jump, jumpFront, jumpBack;
  jump = numRows * 2 - 2;
  jumpFront = jump;
  jumpBack = 0;
  let offset = 0;
  let first = true;
  while (result.length < s.length) {
    let i;
    if (first) {
      i = 0;
      first = !first;
    }
    i = 0;
    let isFrontTurn = true;
    let prevIdx;
    while (i < s.length) {
      // * figure out what is wrong with logic here. prevIdx === 0 = i when it shouldnt so it skips to i = 2 in second row...
      if ((prevIdx || prevIdx === 0) && prevIdx !== i) {
        if (result.length === 4) {
          console.log(jumpFront, jumpBack);
          console.log(isFrontTurn);
          console.log(i, offset);
        }

        result += s[i + offset];
      }
      prevIdx = i;
      if (isFrontTurn) {
        i += jumpFront;
      } else {
        i += jumpBack;
      }
      isFrontTurn = !isFrontTurn;
    }
    jumpFront -= 2;
    jumpBack += 2;
    offset++;
  }

  return result;
};

let test = 'PAYPALISHIRING';
console.log(convert(test, 3)); // PAHNAPLSIIGYIR

/*
Example 1: jump = 0
Input: s = "PAYPALISHIRING", numRows = 1
Output: "PAYPALISHIRING"

Example 2: jump = 2
Input: s = "PAYPALISHIRING", numRows = 2
Output: "PYAIHRNAPLSIIG"
Explanation:


Example 1: 	jump = 4
						jumpFront = 4
						jumpBack = 0

						jumpFront = 2
						jumpBack = 2

						jumpFront = 0
						jumpBack = 4
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P---A---H---N
A-P-L-S-I-I-G
Y---I---R

P   A   H   N
A P L S I I G
Y   I   R

Example 2: // jump = 6
						jumpFront = 6
						jumpBack = 0

						jumpFront = 4
						jumpBack = 2

						jumpFront = 2
						jumpBack = 4

						jumpFront = 0
						jumpBack = 6
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P-----I----N
A---L-S--I-G
Y-A---H-R
P-----I

P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

Example 4:
Input:


*/
