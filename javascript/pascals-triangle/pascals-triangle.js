export class Triangle {
  /**
   *
   * @param {number} n Number of rows in Pascal's triangle
   */
  constructor(n) {
    this._rows = this._init(n);
  }

  /**
   * @returns {[number]}  Last row in Pascal's triangle
   */
  get lastRow() {
    return [...this._rows[this._rows.length - 1]];
  }

  /**
   * @returns {[[number]]}  All the rows of Pascal's triangle
   */
  get rows() {
    return [...this._rows];
  }
  /**
   *
   * @param {number} n Number of rows in Pascal's triangle
   * @returns {[[Number]]} All the rows of Pascal's triangle built based on n
   */
  _init(n) {
    const result = [[1]];
    for (let i = 0; i < n - 1; i++) {
      const tempRow = [1];
      for (let j = 1; j < i + 1; j++) {
        tempRow.push(result[i][j - 1] + result[i][j]);
      }
      tempRow.push(1);
      result.push(tempRow);
    }
    return result;
  }
}
