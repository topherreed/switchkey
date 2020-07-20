import React from "react";


const russianDict= {
    'a': 'ф',
    'b': 'и',
    'c': 'с',
    'd': 'в',
    'e': 'у',
    'f': 'а',
    'g': 'п',
    'h': 'р',
    'i': 'ш',
    'j': 'о',
    'k': 'л',
    'l': 'д',
    'm': 'ь',
    'n': 'т',
    'o': 'щ',
    'p': 'з',
    'q': 'й',
    'r': 'к', 
    's': 'ы',
    't': 'е',
    'u': 'г',
    'v': 'м',
    'w': 'ц',
    'x': 'ч',
    'y': 'н',
    'z': 'я',
    '[': 'х',
    ']': 'ъ',
    '\\': 'ё',
    ';': 'ж',
    '\'': 'э',
    ',': 'б',
    '.': 'ю',
    '/': '/'

}
const russianDictShifted= {
  'A': 'Ф',
  'B': 'И',
  'C': 'С',
  'D': 'В',
  'E': 'У',
  'F': 'А',
  'G': 'П',
  'H': 'Р',
  'I': 'Ш',
  'J': 'О',
  'K': 'Л',
  'L': 'Д',
  'M': 'Ь',
  'N': 'Т',
  'O': 'Щ',
  'P': 'З',
  'Q': 'Й',
  'R': 'К',
  'S': 'Ы',
  'T': 'Е',
  'U': 'Г',
  'V': 'М',
  'W': 'Ц',
  'X': 'Ч',
  'Y': 'Н',
  'Z': 'Я',
  '{': 'Х',
  '}': 'Ъ',
  '|': 'Ё',
  ':': 'Ж',
  '"': 'Э',
  '<': 'Б',
  '>': 'Ю',
  '?': '?'

}
const georgianDict = {
    'a': 'ა',
    'b': 'ბ',
    'c': 'ც',
    'd': 'დ',
    'e': 'ე',
    'f': 'ფ',
    'g': 'გ',
    'h': 'ჰ',
    'i': 'ი',
    'j': 'ჯ',
    'k': 'კ',
    'l': 'ლ',
    'm': 'მ',
    'n': 'ნ',
    'o': 'ო',
    'p': 'პ',
    'q': 'ქ',
    'r': 'რ', 
    's': 'ს',
    't': 'ტ',
    'u': 'უ',
    'v': 'ვ',
    'w': 'ხ',
    'x': 'ხ',
    'y': 'ყ',
    'z': 'ზ',
    '[': '[',
    ']': ']',
    '\\': '\\',
    ';': ';',
    '\'': '\'',
    ',': ',',
    '.': '.',
    '/': '/'
}
const georgianDictShifted= {
    'A': null,
    'B': null,
    'C': 'ჩ',
    'D': null,
    'E': null,
    'F': null,
    'G': null,
    'H': null,
    'I': null,
    'J': 'ჟ',
    'K': null,
    'L': null,
    'M': null,
    'N': null,
    'O': null,
    'P': null,
    'Q': null,
    'R': 'ღ',
    'S': 'შ',
    'T': 'თ',
    'U': null,
    'V': null,
    'W': 'ჭ',
    'X': null,
    'Y': null,
    'Z': 'ძ',
    '{': '{',
    '}': '}',
    '|': '|',
    ':': ':',
    '"': '"',
    '<': '<',
    '>': '>',
    '?': '?'
  
}


const Converter = {

    convert: function(c, lang, isUppercase) {
        if(lang === 'russian') {
          if(!isUppercase) {
            return russianDict[c];
          } else {
            return russianDictShifted[c];
          }    
        } else if(lang === 'georgian') {
          if(!isUppercase) {
            return georgianDict[c];
          } else {
            return georgianDictShifted[c];
          }
            return georgianDict[c];
        } else return c;
    }

    
}

export default Converter;