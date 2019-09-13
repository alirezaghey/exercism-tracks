export class QueenAttack {
  constructor(queens = { white: [0, 3], black: [7, 3] }) {
    // Make sure the queens are on different cells
    if (
      queens.white[0] === queens.black[0] &&
      queens.white[1] === queens.black[1]
    )
      throw 'Queens cannot share the same space';
    // Make sure the queens are on the standard chess field
    if (
      queens.white.some(el => el > 7 || el < 0) ||
      queens.black.some(el => el > 7 || el < 0)
    )
      throw 'Queens need to be on a standard 8*8 check field (zero-based)';
    this.white = queens.white;
    this.black = queens.black;
    this.board = this.initBoard(this.black, this.white);
  }

  canAttack() {
    return this.areInSameCol() || this.areInSameRow() || this.areInSameDiag();
  }

  areInSameCol(black = this.black, white = this.white) {
    return black[1] === white[1];
  }

  areInSameRow(black = this.black, white = this.white) {
    return black[0] === white[0];
  }

  areInSameDiag(black = this.black, white = this.white) {
    // In a diagonal dy === dx
    return Math.abs(black[0] - white[0]) === Math.abs(black[1] - white[1]);
  }

  toString() {
    return this.board.map(row => row.map(cell => cell).join(' ')).join('\n');
  }

  initBoard(black, white) {
    // Create empty chess board
    const board = Array(8)
      .fill()
      .map(_ => Array(8).fill('_'));

    // Place white and black queens
    board[black[0]][black[1]] = 'B';
    board[white[0]][white[1]] = 'W';

    // Take care of the last new line as expected in the tests
    board[7][7] = board[7][7] + '\n';

    return board;
  }
}
