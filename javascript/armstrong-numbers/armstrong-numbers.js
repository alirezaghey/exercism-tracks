//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = num => {
  const numOfDigits = (num + '').length;
  let numTemp = num;
  let sum = 0;
  while (numTemp > 0) {
    sum += (numTemp % 10) ** numOfDigits;
    numTemp = Math.floor(numTemp / 10);
  }

  return sum === num;
};
