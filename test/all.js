const trimPhp = require('../index').default;
const str = '\n    Hello World!     \n';

console.log('Without Trim: ', str);
console.log('With lTrim: ', new trimPhp().lTrim(str));
console.log('With rTrim: ', new trimPhp().rTrim(str));
console.log('With trimPhp: ', new trimPhp().trim(str));
