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
  const width = field[0].length;
  const heigth = field.length;
  const mineField = new MineField(heigth, width);
  for (let y = 0; y < heigth; y++) {
    for (let x = 0; x < width; x++) {
      mineField.setCell(field, y, x);
    }
  }
  return mineField.grid.map(row => row.join(''));
};

class MineField {
  constructor(heigth, width) {
    this.grid = this.initGrid(heigth, width);
    // from top-left corner moves around a cell clockwise
    // where adjCells[0][0] is the horizontal offset and
    // adjCells[0][1] is the vertical offset
    //prettier-ignore
    this.adjCells = [[-1,-1],  [0, -1],  [1,-1],
                     [-1, 0],  /*^|^*/   [1, 0],
                     [-1, 1],  [0, 1],   [1, 1]]
    this.MINE = '*';
    this.BLANK = ' ';
  }

  setCell(field, y, x) {
    if (field[y][x] === this.MINE) {
      this.grid[y][x] = this.MINE;
      return;
    }

    const numOfMines = this.findAdjacenBombs(field, y, x);

    // if numOfMines is zero, insert blank
    this.grid[y][x] = numOfMines ? numOfMines.toString() : this.BLANK;
  }

  // Return all the surrounding cells' content
  findAdjacenBombs(field, y, x) {
    return this.adjCells
      .map(([xOffset, yOffset]) =>
        field[y + yOffset] && field[y + yOffset][x + xOffset]
          ? field[y + yOffset][x + xOffset]
          : ''
      )
      .filter(el => el === this.MINE).length;
  }

  initGrid(height, width) {
    const matrix = [];
    for (let y = 0; y < height; y++) {
      matrix.push(new Array(width));
    }
    return matrix;
  }
}
