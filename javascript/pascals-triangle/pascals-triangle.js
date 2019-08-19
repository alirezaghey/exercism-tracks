//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(n) {
    this._rows = this.init(n);
  }

  get lastRow() {
    return [...this._rows[this._rows.length - 1]];
  }

  get rows() {
    return [...this._rows];
  }

  init(n) {
    const r = [[1]];
    for (let i = 0; i < n - 1; i++) {
      const temp = [1];
      for (let j = 1; j < i + 1; j++) {
        temp.push(r[i][j - 1] + r[i][j]);
      }
      temp.push(1);
      r.push(temp);
    }
    return r;
  }
}
