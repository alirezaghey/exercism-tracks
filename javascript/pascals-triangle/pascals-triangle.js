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
    for (let i = 0; i < n - 1; i++) result.push(this._createNextRow(result[i]));
    return result;
  }

  _createNextRow(row) {
    // const result = [];
    // for (let i = 1; i < row.length; i++) result.push(row[i - 1] + row[i]);
    return [
      1,
      ...row
        .map((el, i) => (i < row.length - 1 ? el + row[i + 1] : null))
        .filter(el => el),
      1
    ];
  }
}
