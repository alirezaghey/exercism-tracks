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
export const annotate = field => {
  if (field.length === 0) return [];

  const grid = new Grid(field);
  for (let y = 0; y < grid.heigth; y++) {
    for (let x = 0; x < grid.width; x++) {
      // It's a mine; Leave it;
      if (isMine(grid.getCell(y, x))) {
        grid.setCell(MINE, y, x);
        continue;
      }

      let numOfMines = grid.findAdjacentCells(y, x).filter(isMine).length;
      // if numOfMines is zero, insert blank
      grid.setCell(numOfMines ? numOfMines.toString() : BLANK, y, x);
    }
  }
  return grid.matrix.map(row => row.join(''));
};

class Grid {
  constructor(rawData) {
    this.heigth = rawData.length;
    this.width = rawData[0].length;
    this.matrix = this.initGrid(rawData);
    // from top-left corner moves around a cell clockwise
    // where adjCells[0][0] is the horizontal offset and
    // adjCells[0][1] is the vertical offset
    //prettier-ignore
    this.adjCells = [[-1,-1],  [0, -1],  [1,-1],
    [-1, 0],  /*^|^*/   [1, 0],
    [-1, 1],  [0, 1],   [1, 1]]
  }

  // Return all the surrounding cells' content
  // If field is null, do this with your own grid;
  findAdjacentCells(y, x) {
    return this.adjCells.map(([xOffset, yOffset]) =>
      this.matrix[y + yOffset] && this.matrix[y + yOffset][x + xOffset]
        ? this.matrix[y + yOffset][x + xOffset]
        : ''
    );
  }

  setCell(content, y, x) {
    this.matrix[y][x] = content;
  }

  getCell(y, x) {
    return this.matrix[y][x];
  }

  initGrid(rawData) {
    const matrix = [];
    for (let y = 0; y < this.heigth; y++) {
      const tempRow = [];
      for (let x = 0; x < this.width; x++) {
        tempRow.push(rawData[y][x]);
      }
      matrix.push(tempRow);
    }
    return matrix;
  }
}

const MINE = '*';
const BLANK = ' ';

function isMine(el) {
  return el === MINE;
}
