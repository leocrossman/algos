/*
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
*/
const fullJustify = (words, maxWidth) => {
  const lines = getLines(words, maxWidth);

  return lines;
};

const getLines = (words, maxWidth) => {
  const lines = [];
  let lineLen = 0;
  let line = [];
  let spaceCount = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // check if current line + an extra space would overflow
    if (lineLen + spaceCount >= maxWidth) {
      [line, lineLen, spaceCount] = newLine();
      continue;
    }
    // check if current line + curr word fits
    else if (lineLen + word.length <= maxWidth) {
      [line, lineLen, spaceCount] = addToCurrentLine(
        line,
        lineLen,
        word,
        spaceCount
      );
    }
  }
  return lines;
};

const newLine = () => {
  return [[], 0, 0];
};

const addToCurrentLine = (line, lineLen, word, spaceCount) => {
  if (line.length) spaceCount = 1;
  line.push(word);
  lineLen += word.length + spaceCount;
  return [line, lineLen, spaceCount];
};

let words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
console.log(fullJustify(words, 16));
/*
--------------------------------------------------------------------------------
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
--------------------------------------------------------------------------------
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified becase it contains only one word.
--------------------------------------------------------------------------------
Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
--------------------------------------------------------------------------------
*/
