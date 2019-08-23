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
const BLANK = ' ';
export const annotate = field => {
  if (field.length === 0) return [];

  const grid = new Grid(field);
  for (let y = 0; y < grid.heigth; y++) {
    for (let x = 0; x < grid.width; x++) {
      // It's a mine; Leave it;
      if (isMine(grid.getRawCell(y, x))) {
        grid.setCell(MINE, y, x);
        continue;
      }

      let numOfMines = grid.findAdjacentCells(y, x).filter(isMine).length;
      // if numOfMines is zero, insert blank
      grid.setCell(numOfMines ? numOfMines.toString() : BLANK, y, x);
    }
  }
  return grid.content.map(row => row.join(''));
  function isMine(el) {
    return el === MINE;
  }
};

class Grid {
  constructor(rawData) {
    this.rawData = rawData.slice();
    this.heigth = rawData.length;
    this.width = rawData[0].length;
    this.content = this.initGrid(this.heigth, this.width);
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
    return this.adjCells
      .map(([xOffset, yOffset]) =>
        this.rawData[y + yOffset] && this.rawData[y + yOffset][x + xOffset]
          ? this.rawData[y + yOffset][x + xOffset]
          : ''
      )
      .filter(el => el);
  }
  setCell(content, y, x) {
    this.content[y][x] = content;
  }

  getRawCell(y, x) {
    return this.rawData[y][x];
  }

  initGrid(height, width) {
    const matrix = [];
    for (let y = 0; y < height; y++) {
      matrix.push(new Array(width));
    }
    return matrix;
  }
}
