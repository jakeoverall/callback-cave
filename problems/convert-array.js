/*
Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert 
it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN] in-place using constant extra space.
*/

var convertArray = function (arr) {

	arr.sort(function(a, b){
		return a.charAt(1) > b.charAt(1);
	});

	return arr;
}