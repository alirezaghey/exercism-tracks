//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


/*****************PLEASE NOTE****************/
// I'm not an expert but here are my two cents:
// Using a dictionary-like data structure here would be the right way to do it
// COLORS is something that is repeatedly looked up and an O(1) time complexity of say a JS object
// is way preferable over searching in an array for string matches which would be O(n).
// For the reverse search (number to color), where an array works O(1), we could use the array or create a reverse dictionary
// because both the keys and values are unique
// Considering the current test suite we are expected to create an array of COLORS.
/****************PLEASE NOTE***************/

export const colorCode = color => COLORS.indexOf(color.toLowerCase());

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
