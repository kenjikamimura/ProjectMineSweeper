const answerArray = [
  [true, true, false, false, false, false],
  [false, true, false, false, false, false],
  [false, false, true, false, false, false],
  [false, false, false, true, false, false],
  [false, false, false, false, true, false],
  [false, false, false, false, false, true]
];

let blankArray = [];
for (let i = 0; i < answerArray.length; i++) {
  let arrayRow = [];
  for (let j = 0; j < answerArray.length; j++) {
    arrayRow.push(false);
  }
  blankArray.push(arrayRow);
}

export { blankArray };
export default answerArray;
