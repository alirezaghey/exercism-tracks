//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) =>
  // Number((seconds / ORBITALPERIODSINSECS[planet]).toFixed(2));
  // Rounding to two decimal points
  Math.round((seconds / ORBITALPERIODSINSECS[planet]) * 100) / 100;

// const ORBITALPERIODSINSECS = {
// earth: 31557600,
// mercury: 31557600 * 0.2408467,
// venus: 31557600 * 0.61519726,
// mars: 31557600 * 1.8808158,
// jupiter: 31557600 * 11.862615,
// saturn: 31557600 * 29.447498,
// uranus: 31557600 * 84.016846,
// neptune: 31557600 * 164.79132
// };

const ORBITALPERIODSINSECS = {
  earth: 31557600,
  get mercury() {
    return this.earth * 0.2408467;
  },
  get venus() {
    return this.earth * 0.61519726;
  },
  get mars() {
    return this.earth * 1.8808158;
  },
  get jupiter() {
    return this.earth * 11.862615;
  },
  get saturn() {
    return this.earth * 29.447498;
  },
  get uranus() {
    return this.earth * 84.016846;
  },
  get neptune() {
    return this.earth * 164.79132;
  }
};
