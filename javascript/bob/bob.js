/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  if (/^[A-Z ]+\?$/.test(message)) return ANSWERS['calm'];
  if (/([\w\d]+\?$)|([\W]+\?$)|(\? +$)/.test(message)) return ANSWERS['sure'];
  if (
    /(^[A-Z ]+!$)|(^[A-Z]+$)|(^[\d,A-Z ]+!$)|(^[A-Z\d\W]+!$)|(^([A-Z]+[ ]*)+$)/.test(
      message
    )
  )
    return ANSWERS['whoa'];
  if (/(^\s+$)|(^$)/.test(message)) return ANSWERS['fine'];
  return ANSWERS['whatever'];
};

const ANSWERS = {
  whatever: 'Whatever.',
  whoa: 'Whoa, chill out!',
  sure: 'Sure.',
  calm: "Calm down, I know what I'm doing!",
  fine: 'Fine. Be that way!'
};
