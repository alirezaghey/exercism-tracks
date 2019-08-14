// Initial thoughts:
//      Looking at each cells adjacent cells we check for a mine
//          and count building the annotated mine field
//      Time complexity: O(n); We have to touch every cell once.
//          Looking at the adjacent cells is a constant and does not count
//      Space complexity: O(n); We don't create the annoted field in place.
//          This is because of the type of the input data and not our algorithm.
//          The rows of the input data are string literals which are immutable and not changable in-place
//          We could potentially create new strings for the rows and change them at the end of annotating each row
//          which would decrease our space complexity by a factor of the number of the rows but considering
//          that it would make our code much more complext we have decided not to do so.
export const annotate = rawField => {
  const annotatedField = [];
  const fieldHeight = rawField.length;
  const fieldWidth = fieldHeight ? rawField[0].length : 0;

  for (let i = 0; i < fieldHeight; i++) {
    const tempRow = [];
    for (let j = 0; j < fieldWidth; j++) {
      // If it's a mine cell fill it with '*' and skip
      if (rawField[i][j] === '*') {
        tempRow.push('*');
        continue;
      }
      let numOfMines = 0;
      // Starting at upper left corner we check the surrounding box
      // Waling clockwise, looking for mines
      // prettier-ignore
      {
            if (i > 0 && j > 0 && rawField[i-1][j-1] === "*") numOfMines++ // Upper left corner
            if (i > 0 && rawField[i-1][j] === "*") numOfMines++
            if (i > 0 && j < fieldWidth-1 && rawField[i-1][j+1] === "*") numOfMines++ // Upper right corner
            if (j < fieldWidth-1 && rawField[i][j+1] === "*") numOfMines++
            if (i < fieldHeight-1 && j < fieldWidth-1 && rawField[i+1][j+1] === "*") numOfMines++ // Lower right corner
            if (i < fieldHeight-1 && rawField[i+1][j] === "*") numOfMines++
            if (i < fieldHeight-1 && j > 0 && rawField[i+1][j-1] === "*") numOfMines++ // Lower left corner
            if (j > 0 && rawField[i][j-1] === "*") numOfMines++
        }
      tempRow.push(!numOfMines ? ' ' : numOfMines + '');
    }
    annotatedField.push(tempRow.join(''));
  }
  console.log(annotatedField);
  return annotatedField;
};
