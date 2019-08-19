/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  const ANSWERS = {
    whatever: { regex: [], response: 'Whatever.' },
    whoa: {
      regex: [
        /(^[A-Z ]+!$)/,
        /(^[A-Z]+$)/,
        /(^[\d,A-Z ]+!$)/,
        /(^[A-Z\d\W]+!$)/,
        /(^([A-Z]+[ ]*)+$)/
      ],
      response: 'Whoa, chill out!'
    },
    calm: {
      regex: [/^[A-Z ]+\?$/],
      response: "Calm down, I know what I'm doing!"
    },
    sure: {
      regex: [/([\w\d]+\?$)/, /([\W]+\?$)/, /(\? +$)/],
      response: 'Sure.'
    },
    fine: { regex: [/(^\s+$)/, /(^$)/], response: 'Fine. Be that way!' }
  };
  for (let k in ANSWERS)
    if (ANSWERS[k].regex.some(reg => reg.test(message)))
      return ANSWERS[k].response;
  return ANSWERS.whatever.response;
};
