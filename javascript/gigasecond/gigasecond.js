//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// One giga second is equivalent to one billion seconds
const ONEGIGASECOND = Math.pow(10, 9);

export const gigasecond = oldYear =>
  new Date(oldYear.getTime() + 1000 * ONEGIGASECOND);
