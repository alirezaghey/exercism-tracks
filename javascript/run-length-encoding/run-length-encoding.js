//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = decString => {
  const encString = [];
  let i = 0;

  while (i < decString.length) {
    const letter = decString[i];
    let counter = 0;
    i++;
    while (i < decString.length && decString[i] === letter) {
      counter++;
      i++;
    }
    encString.push((counter ? ++counter : '') + letter);
  }

  return encString.join('');
};

export const decode = encString => {
  if (encString.length === 0) return '';

  const tokens = encString.match(/\d{0,}[^\d]{1}/gi);

  return tokens
    .map(token => {
      const repetition = token.match(/^\d{1,}/);
      return repetition ? token[token.length - 1].repeat(repetition) : token;
    })
    .join('');
};

// export const decode = encString =>
//   encString.length === 0 ? '' :
//   encString.match(/\d{0,}[^\d]{1}/gi).map(token => {
//     const repetition = token.match(/^\d{1,}/);
//     return repetition ? token[token.length-1].repeat(repetition) : token;
//   }).join('')
