//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roaster = {};
  }
  roster() {
    return Object.keys(this._roaster).reduce((acc, el) => {
      acc[el] = [...this._roaster[el]];
      return acc;
    }, {});
  }

  add(name, gr) {
    this._roaster[gr] = this._roaster[gr]
      ? [...this._roaster[gr], name].sort()
      : [name];
  }

  grade(gr) {
    return this._roaster[gr] ? [...this._roaster[gr]] : [];
  }
}
