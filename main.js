const txt = "This regular expression example was made in January 27,  2022.";
const pattern = /[^A-Za-z0-9,. ]+/g;
// [A-Za-z,.] means A-Z or a-z or , or . or space
// ^ in set character means negation, not A to Z, not a to z, no comma, no space and no period
const matches = txt.match(pattern);
console.log(matches);
// => ["6", "2019"]