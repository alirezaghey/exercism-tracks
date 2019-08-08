//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this._cols = [];
    this._rows = [];
    this.init(matrix);
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._cols;
  }

  init(matrix) {
    const arrMatrix = matrix
      .split('\n')
      .map(el => el.split(' ').map(el => Number(el)));
    this._rows = arrMatrix.slice();
    for (let i = 0; i < arrMatrix[0].length; i++) {
      const tempCol = [];
      for (let j = 0; j < arrMatrix.length; j++) {
        tempCol.push(arrMatrix[j][i]);
      }
      this._cols.push(tempCol);
    }
  }
}
