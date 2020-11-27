//template String
const title ='Best Book Of 2020';
const author = 'Mario';
const likes = 30;

//Concanetation  way
let result = 'The Blog Called '+title+' By '+author+' has '+ likes+ ' likes';
console.log(result);

//template String
let result1 = `The Blog Called  ${title} By ${author} has ${likes} likes`;
console.log(result1);