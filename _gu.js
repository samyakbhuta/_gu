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

var signs = _gu.charcodes(2689,2691)	// [ઁ] to [ઃ]
		.concat( _gu.charcodes(2748,2749) ) // [઼] and [ઽ]
		.concat( _gu.charcodes(2765,2765) ) // [્]
		.concat( _gu.charcodes(2768,2768) ) // [ૐ]
		.concat( _gu.charcodes(2800,2801) ) // [૰] and [૱]

var reserved = _gu.charcodes(2692,2692)
		.concat( _gu.charcodes(2702,2702) )
		.concat( _gu.charcodes(2706,2706) )
		.concat( _gu.charcodes(2729,2729) )
		.concat( _gu.charcodes(2737,2737) )
		.concat( _gu.charcodes(2740,2740) )
		.concat( _gu.charcodes(2746,2747) )
		.concat( _gu.charcodes(2758,2758) )
		.concat( _gu.charcodes(2762,2762) )
		.concat( _gu.charcodes(2766,2767) )
		.concat( _gu.charcodes(2769,2783) )
		.concat( _gu.charcodes(2788,2789) ); // Viram ( Danda and Double Danda)

var unassigned = _gu.charcodes(2688,2688)
		.concat( _gu.charcodes(2802,2815) );

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

// Adds Gujarati Signs as subset
_gu.addSubset( 'Sign', signs );

// Adds Gujarati reserved characters as subset
_gu.addSubset( 'Reserved', reserved );

// Adds Gujarati unassigned characters as subset
_gu.addSubset( 'Unassigned', unassigned );

// Returns the updated module
module.exports = _gu;