//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(input = []) {
    this.values = input;
  }

  append(list) {
    // TODO: How to check that the argument is of type List and raise exception?
    for (let i = 0; i < list.values.length; i++)
      this.values.push(list.values[i]);
    return this;
  }

  concat(lists) {
    // TODO: How I check whether its a list or a list of lists is ugly and sad! Solution?
    const values = [...this.values];
    if (lists[0] === undefined && lists.values !== undefined) {
      // this is a list of lists
      for (const list of lists.values)
        for (let i = 0; i < list.values.length; i++)
          values.push(list.values[i]);
      return new List(values);
    } else {
      // this is a flat list
      for (let i = 0; i < lists.values.length; i++) values.push(lists[i]);
      return new List(values);
    }
  }

  filter(func) {
    const values = [];
    for (let i = 0; i < this.values.length; i++)
      if (func(this.values[i])) values.push(this.values[i]);
    return new List(values);
  }

  map(func) {
    const values = [];
    for (let i = 0; i < this.values.length; i++)
      values.push(func(this.values[i]));
    return new List(values);
  }

  length() {
    return this.values.length;
  }
  // TODO: Is there a clean way to refactor foldl and foldr?
  foldl(func, init) {
    if (this.values.length === 0) return init;
    let i = 0;
    let acc;
    if (init === undefined) {
      acc = this.values[0];
      i++;
    } else acc = init;
    for (; i < this.values.length; i++) {
      acc = func(acc, this.values[i]);
    }
    return acc;
  }

  foldr(func, init) {
    if (this.values.length === 0) return init;
    let i = this.values.length - 1;
    let acc;
    if (init === undefined) {
      acc = this.values[i];
      i--;
    } else acc = init;
    for (; i >= 0; i--) {
      acc = func(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    // TODO: isn't the while (first < last) construct more readable?
    const length = this.values.length;
    for (let i = 0; i < length / 2; i++)
      [this.values[i], this.values[length - 1 - i]] = [
        this.values[length - 1 - i],
        this.values[i]
      ];
    return this;
  }
}
