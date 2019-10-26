var trim = require('trim-php');
var str = '\n    Hello World!     \n';

console.log('Without Trim: ', str);
console.log('With lTrim: ', trim.lTrim(str));
console.log('With rTrim: ', trim.rTrim(str));
console.log('With trimPhp: ', trim.trimPhp(str));
