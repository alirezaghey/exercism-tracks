//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (condons) => {

  if (!condons) return [];

  const proteins = [];

  for (let i = 3; i<=condons.length; i+=3) {
    const protein = translation[condons.slice(i-3, i)];
    if (protein === 'STOP') break;
    else if (!protein) throw 'Invalid codon';
    proteins.push(protein);
  }

  return proteins;
};


const translation = {
  'AUG':	'Methionine',
  'UUU': 	'Phenylalanine',
  'UUC':  'Phenylalanine',
  'UUA': 	'Leucine',
  'UUG':  'Leucine',
  'UCU':  'Serine',
  'UCC':  'Serine',
  'UCA':  'Serine',
  'UCG':	'Serine',
  'UAU':  'Tyrosine',
  'UAC':	'Tyrosine',
  'UGU':  'Cysteine',
  'UGC':	'Cysteine',
  'UGG':	'Tryptophan',
  'UAA':  'STOP',
  'UAG':  'STOP',
  'UGA':	'STOP'
}