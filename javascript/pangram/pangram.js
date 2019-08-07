//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = str =>
  new Set([...str.toLowerCase().replace(/[^a-z]/g, '')]).size === 26;
