export default class TrimPhp {
  /**
   * Strip whitespace (or other characters) from the beginning of a string.
   * @param str The string that will be trimmed.
   * @param charList Optionally, the stripped characters can also be specified
   *                 using the charList parameter. Simply list all characters
   *                 that you want to be stripped.
   * @returns Returns the modified string.
   */
  lTrim(str: string, charList?: string): string {
    charList = !charList ? ' \\s\u00A0' : (charList + '');
    charList = charList.replace(/([[\]().?/*{}+$^:])/g, '$1');

    const regex = new RegExp('^[' + charList + ']+', 'g');

    return (str + '').replace(regex, '');
  }

  /**
   * Strip whitespace (or other characters) from the end of a string.
   * @param str The string that will be trimmed.
   * @param charList Optionally, the stripped characters can also be specified
   *                 using the charList parameter. Simply list all characters
   *                 that you want to be stripped.
   * @returns Returns the modified string.
   */
  rTrim(str: string, charList?: string): string {
    charList = !charList ? ' \\s\u00A0' : (charList + '');
    charList = charList.replace(/([[\]().?/*{}+$^:])/g, '\\$1');

    const regex = new RegExp('[' + charList + ']+$', 'g');

    return (str + '').replace(regex, '');
  }

  /**
   * Strip whitespace (or other characters) from the beginning and end of a string.
   * @param str The string that will be trimmed.
   * @param charList Optionally, the stripped characters can also be specified
   *                 using the charList parameter. Simply list all characters
   *                 that you want to be stripped.
   * @returns Returns the modified string.
   */
  trim(str: string, charList?: string): string {
    const whitespaceList: string[] = [
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
    ];

    let finalString = '';
    let whitespace = whitespaceList.join('');
    let l = 0;
    let i = 0;

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
  }
}
