//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = ([...dna]) => dna.map(c => DNA2RNA[c]).join('');

const DNA2RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};
