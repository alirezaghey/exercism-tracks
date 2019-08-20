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
const MINE = '*';
export const annotate = rawField => {
  const annotatedField = [];
  const fieldHeight = rawField.length;
  const fieldWidth = fieldHeight ? rawField[0].length : 0;

  for (let i = 0; i < fieldHeight; i++) {
    const tempRow = [];
    for (let j = 0; j < fieldWidth; j++) {
      // If it's a mine cell fill it with '*' and skip
      if (rawField[i][j] === MINE) {
        tempRow.push(MINE);
        continue;
      }
      let numOfMines = findAdjacentMines(rawField, i, j);
      // if number of adjacent mines equals zero
      // we need to enter an empty space for that particular cell
      tempRow.push(!numOfMines ? ' ' : numOfMines + '');
    }
    annotatedField.push(tempRow.join(''));
  }
  return annotatedField;
};

// from top-left corner moves around a cell clockwise
// where adjCells[0][0] is the horizontal offset and
// adjCells[0][1] is the vertical offset
//prettier-ignore
const adjCells = [[-1,-1],  [0, -1],  [1,-1],
                  [-1, 0],  /*^|^*/   [1, 0],
                  [-1, 1],  [0, 1],   [1, 1]]
// Using the adjCells we check all the adjacent cells
// and increase the numOfMines accordingly
const findAdjacentMines = (field, i, j) =>
  adjCells.reduce(
    (acc, [x, y]) =>
      field[i + y] && field[i + y][j + x] === MINE ? ++acc : acc,
    0
  );
