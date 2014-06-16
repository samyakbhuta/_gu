## _gu

#### Installation

```
npm install unilities-gu
```

#### Usage Example

```js
var _gu = require('unilities-gu');

// General, biggest subset and covers all the codepoints
console.log(_gu.getGujaratiCodeList());
console.log(_gu.getGujaratiList());
console.log(_gu.isGujarati('ક'));
console.log(_gu.isGujarati('ૐ'));
console.log(_gu.isGujarati('૱'));
console.log(_gu.isGujarati(2709));

// Digit
console.log(_gu.getDigitCodeList());
console.log(_gu.getDigitList());
console.log(_gu.isDigit('૯'));
```