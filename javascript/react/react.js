class InputCell {
  constructor(val) {
    this.value = val;
    this.dependents = [];
  }

  setValue(val) {
    if (this.value !== val) {
      this.value = val;
      this.dependents.forEach(cell => cell.notify());
    }
  }
}

class ComputeCell {
  constructor(cells, fn) {
    this.cells = cells;
    this.fn = fn;
    this.val = this.fn(this.cells);
    this.callBacks = [];

    cells.forEach(cell => {
      cell.dependents.push(this);
    });
    this.dependents = [];
  }

  get value() {
    return this.val;
  }

  addCallback(callback) {
    this.callBacks.push(callback);
  }

  removeCallback(callback) {
    this.callBacks = this.callBacks.filter(el => el !== callback);
  }

  notify() {
    const tempVal = this.fn(this.cells);
    if (this.val !== tempVal) {
      this.val = tempVal;
      this.dependents.forEach(cell => cell.notify());
      this.callBacks.forEach(callback => callback.fire(this));
    }
  }
}

class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  fire(cell) {
    this.values.push(this.fn(cell));
  }
}

export { InputCell, ComputeCell, CallbackCell };
