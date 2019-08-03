//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = colors =>
  Number(
    colors
      .filter(c => c)
      .map(c => colorCode(c))
      .join('')
  );

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

const colorCode = color => COLORS.indexOf(color.toLowerCase());
