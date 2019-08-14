//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = num => {
  const numOfDigits = String(num).length;
  return (
    num ===
    String(num)
      .split('')
      .reduce((acc, el) => acc + Math.pow(Number(el), numOfDigits), 0)
  );
  // const numOfDigits = (num + '').length;
  // let numTemp = num;
  // let sum = 0;
  // while (numTemp > 0) {
  //   sum += (numTemp % 10) ** numOfDigits;
  //   numTemp = Math.floor(numTemp / 10);
  // }

  // return sum === num;
};
