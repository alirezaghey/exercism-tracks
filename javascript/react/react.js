class InputCell {
  constructor(val) {
    this.value = val;
    this.ComputeCells = [];
  }
  setValue(val) {
    if (this.value !== val) {
      this.value = val;
      this.ComputeCells.forEach(computeCell => computeCell.notify());
    }
  }
}

class ComputeCell {
  constructor(inputCells, computerFn) {
    this.inputCells = inputCells;
    this.computeCells = [];
    this.inputCells.forEach(inputCell => {
      if (inputCell instanceof InputCell) {
        inputCell.ComputeCells.push(this);
      } else if (inputCell instanceof ComputeCell) {
        console.log('some really bad hello');
        this.computeCells.push(inputCell);
      }
    });
    this.computerFn = computerFn;
    this.callBacks = [];
    this.value = this.computerFn(this.inputCells);
  }
  changeValue() {
    console.log('hello from temp value');
    console.log(this.computerFn(this.inputCells));
    const tempValue = this.computerFn(this.inputCells);
    this.computeCells.forEach(cell => cell.notify());
    if (
      tempValue !== this.value
      // tempValue.length !== this.value.length //||
      // tempValue.some((v, i) => v !== this.value[i])
    ) {
      this.value = tempValue;
      this.callBacks.forEach(callBack => callBack.notify(this));
    }
    return this.computerFn(this.inputCells);
  }
  addCallback(callBack) {
    this.callBacks.push(callBack);
  }
  removeCallback(callBack) {
    let found = -1;
    for (let i = 0; i < this.callBacks.length; i++) {
      if (this.callBacks[i] === callBack) {
        found = i;
        break;
      }
    }
    if (found !== -1) this.callBacks.splice(found, 1);
  }
  notify() {
    // this.callBacks.forEach(callBack => {
    //   callBack.notify(this);
    this.changeValue();
    // });
  }
}

class CallbackCell {
  constructor(cb) {
    this.cb = cb;
    this.values = [];
  }
  notify(cell) {
    this.values = [this.cb(cell)];
  }
}

export { InputCell, ComputeCell, CallbackCell };
