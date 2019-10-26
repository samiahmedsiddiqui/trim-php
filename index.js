'use strict';

exports.lTrim = function (str, charList) {
  charList = !charList ? ' \\s\u00A0' : (charList + '');
  charList = charList.replace(/([[\]().?/*{}+$^:])/g, '$1');

  var regex = new RegExp('^[' + charList + ']+', 'g');

  return (str + '').replace(regex, '');
};

exports.rTrim = function (str, charList) {
  charList = !charList ? ' \\s\u00A0' : (charList + '');
  charList = charList.replace(/([[\]().?/*{}+$^:])/g, '\\$1');

  var regex = new RegExp('[' + charList + ']+$', 'g');

  return (str + '').replace(regex, '');
};

exports.trimPhp = function (str, charList) {
  var finalString = '';
  var whitespace = [
    ' ',
    '\n',
    '\r',
    '\t',
    '\f',
    '\x0b',
    '\xa0',
    '\u2000',
    '\u2001',
    '\u2002',
    '\u2003',
    '\u2004',
    '\u2005',
    '\u2006',
    '\u2007',
    '\u2008',
    '\u2009',
    '\u200a',
    '\u200b',
    '\u2028',
    '\u2029',
    '\u3000'
  ].join('');
  var l = 0;
  var i = 0;

  str += '';
  if (charList) {
    whitespace = (charList + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
  }

  l = str.length;
  for (i = 0; i < l; i += 1) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }

  l = str.length;
  for (i = l - 1; i >= 0; i -= 1) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }

  if (whitespace.indexOf(str.charAt(0)) === -1) {
    finalString = str;
  }

  return finalString;
};
