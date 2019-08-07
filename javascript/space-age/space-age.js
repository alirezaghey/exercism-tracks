//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) =>
  Number(
    (
      seconds /
      (EARTHYEARINSECS * PLANETSCOMPAREDTOEARTHINSEC.get(planet))
    ).toFixed(2)
  );
// Number(
//   (seconds / (EARTHYEARINSECS * PLANETSCOMPAREDTOEARTHINSEC[planet])).toFixed(
//     2
//   )
// );
// Rounding to two decimal points
// Math.round((seconds / ORBITALPERIODSINSECS[planet]) * 100) / 100;

const EARTHYEARINSECS = 31557600;
const PLANETSCOMPAREDTOEARTHINSEC = new Map([
  ['earth', 1],
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132]
]);
// const PLANETSCOMPAREDTOEARTHINSEC = {
//   earth: 1,
//   mercury: 0.2408467,
//   venus: 0.61519726,
//   mars: 1.8808158,
//   jupiter: 11.862615,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   neptune: 164.79132
// };
