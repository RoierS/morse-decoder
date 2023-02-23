const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        let morseStr = '';
        for (let i = 0; i < expr.length; i += 10) {
          const morseCode = expr.substr(i, 10);
          if (morseCode === '**********') {
            morseStr += ' ';
          } else {
            let morseChar = '';
            for (let j = 0; j < 10; j += 2) {
              if (morseCode.substr(j, 2) === '10') {
                morseChar += '.';
              } else if (morseCode.substr(j, 2) === '11') {
                morseChar += '-';
              }
            }
            morseStr += MORSE_TABLE[morseChar];
          }
        }
        return morseStr;
}

module.exports = {
    decode
}