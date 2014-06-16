var _uni = require('unilities');

// 2688, start of Gujarati Unicode Code Block
// 128, length of Gujarati Unicode Block
var _gu = new _uni ( 2688, 128, 'Gujarati' );

var independentVowels = _gu.charcodes(2693,2701) // [અ] to [ઍ]
			.concat( _gu.charcodes(2703,2705) )  // [એ] to [ઑ]
			.concat( _gu.charcodes(2707,2708) )  // [ઓ] and [ઔ]
			.concat( _gu.charcodes(2784,2785) ); // [ૠ] and [ૡ]

var dependentVowels = _gu.charcodes(2750,2757)   // [ા] to [ૅ]
			.concat( _gu.charcodes(2759,2761) )  // [ે] to [ૉ]
			.concat( _gu.charcodes(2763,2764) )  // [ો] and [ૌ]
			.concat( _gu.charcodes(2786,2787) ); // [ૢ] and [ૣ]

var vowels = independentVowels.concat(dependentVowels);

var consonants = _gu.charcodes(2709,2728)	// [ક] to [ન]
		.concat( _gu.charcodes(2730,2736) ) // [પ] to [ર]
		.concat( _gu.charcodes(2738,2739) ) // [લ] and [ળ]
		.concat( _gu.charcodes(2741,2745) ) // [વ] to [હ]

var digits = _gu.charcodes(2790,2799); // [૦] to [૯]

// Adds Gujarati IndependentVowels as subset
_gu.addSubset( 'IndependentVowel', independentVowels );

// Adds Gujarati DependentVowels as subset
_gu.addSubset( 'DependentVowel', dependentVowels );

// Adds Gujarati Vowels as subset
_gu.addSubset( 'Vowel', vowels );

// Adds Gujarati Consonants as subset
_gu.addSubset( 'Consonant', consonants );

// Adds Gujarati Digits as subset
_gu.addSubset( 'Digit', digits );

// Returns the updated module
module.exports = _gu;