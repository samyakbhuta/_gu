var _uni = require('unilities');

// 2688, start of Gujarati Unicode Code Block
// 128, length of Gujarati Unicode Block
var _gu = new _uni ( 2688, 128, 'Gujarati' );

// Adds Gujarati Digits as subset
_gu.addSubset('Digit', _gu.charcodes(2790,2799));

// Returns the updated module
module.exports = _gu;