'use strict';

// Написать функцию capitalize, которая будет для каждого слова в строке делать первую букву большой.
// Методы, которые могут понадобиться
//   String.prototype.split
//   Array.prototype.map
//   String.prototype.toUpperCase
//   String.prototype.slice
//   Array.prototype.join

const str = "some string i need";
const capitalizeString = capitalize(str);

console.log(capitalizeString);
/**
 * capitalize string
 * @param {string} string 
 * @returns {string}
 */
function capitalize(string) {
  string = String.toString(string);
  let result = string.split(' ');
  result = result.map((text) => text[0].toUpperCase() + text.slice(1));
  return result.join(' ');
}