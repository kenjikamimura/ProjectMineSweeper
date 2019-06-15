const answerArray = [
  [true, true, false, false, true, true],
  [false, true, false, false, true, true],
  [false, false, true, false, false, false],
  [false, false, false, true, false, false],
  [false, false, false, false, true, false],
  [true, false, false, false, false, true]
];


const answerArray2 = [[true,true,true,true,true,true,true,false,true,true,true,false,false,true,true,true,true,false,true,false,false,false,true,true,false,false,true,true,true,true,true,true,true],
[true,false,false,false,false,false,true,false,false,true,false,true,true,true,true,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false,false,false,true],
[true,false,true,true,true,false,true,false,false,false,true,true,false,false,true,false,true,true,true,true,true,true,false,false,true,false,true,false,true,true,true,false,true],
[true,false,true,true,true,false,true,false,true,false,true,false,false,false,false,false,true,true,false,true,false,true,true,false,false,false,true,false,true,true,true,false,true],
[true,false,true,true,true,false,true,false,true,true,true,false,true,false,false,false,true,true,false,true,false,false,true,false,false,false,true,false,true,true,true,false,true],
[true,false,false,false,false,false,true,false,true,false,true,false,true,false,true,true,false,true,false,false,true,true,false,true,true,false,true,false,false,false,false,false,true],
[true,true,true,true,true,true,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,true,true,true,true,true,true],
[false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,true,false,false,false,false,false,false,false,false],
[true,false,false,false,true,false,true,true,true,false,false,true,false,false,true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,false,false,true],
[false,true,false,false,true,false,false,true,true,false,false,false,false,false,false,true,true,true,true,false,false,true,false,true,false,true,false,false,false,true,true,false,false],
[false,true,false,false,false,true,true,true,true,false,false,false,true,true,true,true,true,false,true,false,true,false,false,true,false,false,true,false,false,true,false,true,false],
[false,false,true,false,true,false,false,true,true,false,true,false,true,true,false,true,false,false,false,true,true,false,true,true,true,false,false,false,false,false,false,false,true],
[false,true,false,false,true,true,true,true,false,false,true,true,false,true,false,false,true,false,false,true,false,false,true,false,true,false,true,false,false,true,false,true,true],
[true,false,false,false,false,false,false,true,false,false,true,false,false,true,true,false,false,true,true,true,true,true,false,false,true,false,false,true,false,false,false,false,false],
[true,false,false,false,true,false,true,false,true,false,true,true,false,true,true,true,false,false,true,false,true,false,false,true,true,true,true,true,true,true,true,true,false],
[true,true,true,false,true,true,false,false,true,false,false,true,false,false,false,true,true,true,false,false,false,true,true,false,true,true,true,false,true,false,false,false,false],
[false,true,true,false,false,false,true,false,true,true,false,true,true,true,false,false,true,true,false,true,true,true,true,false,false,false,true,false,true,false,false,true,false],
[false,true,false,true,true,true,false,false,true,true,false,true,false,false,false,true,true,false,true,false,false,false,false,true,false,false,false,false,false,true,true,false,true],
[true,false,false,true,false,false,true,false,false,true,false,false,false,true,true,true,false,true,false,false,false,true,true,true,true,true,false,true,false,true,false,true,false],
[true,true,true,false,false,true,false,false,true,false,true,true,false,false,true,true,true,true,true,true,true,true,false,false,true,true,true,true,false,false,false,true,true],
[false,false,false,false,false,false,true,false,false,false,true,true,true,true,true,false,false,false,true,false,true,false,false,true,false,false,true,false,true,true,false,true,true],
[true,false,true,false,true,false,false,false,false,true,false,false,true,false,true,false,true,false,false,true,false,false,true,true,true,true,true,true,false,true,true,true,false],
[false,false,false,false,true,true,true,false,false,true,true,true,false,false,true,false,true,false,true,true,false,true,true,true,false,false,false,false,true,false,true,true,false],
[false,false,false,false,false,true,false,false,true,true,false,false,false,false,true,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,true,true],
[true,true,true,false,true,false,true,true,false,false,true,false,false,true,true,true,false,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,false],
[false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,true,true,true,true,false,true,true,true,false,true,false,false,false,true,false,true,false,true],
[true,true,true,true,true,true,true,false,true,false,false,true,false,false,false,true,false,false,true,false,false,false,false,false,true,false,true,false,true,true,false,true,false],
[true,false,false,false,false,false,true,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,true,false,true,false,false,false,true,false,false,true,false],
[true,false,true,true,true,false,true,false,true,false,true,false,false,false,false,true,true,false,false,true,false,false,true,false,true,true,true,true,true,true,false,false,true],
[true,false,true,true,true,false,true,false,false,true,true,false,true,true,true,false,false,true,true,true,true,false,false,false,true,false,true,true,true,true,true,true,false],
[true,false,true,true,true,false,true,false,false,true,true,false,false,true,true,true,false,true,true,false,true,true,true,true,true,false,true,true,true,true,false,false,false],
[true,false,false,false,false,false,true,false,false,false,false,true,false,false,false,true,true,true,false,false,false,true,true,false,false,false,true,false,false,false,false,false,false],
[true,true,true,true,true,true,true,false,true,false,true,true,true,false,true,false,false,true,true,true,false,true,true,true,true,true,true,false,false,false,true,false,true],
]


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
