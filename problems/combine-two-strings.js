/*
We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 
if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the 
left to right ordering of the characters from each string. For example, given str1="abc" and str2="def", 
str3="dabecf" is a valid shuffle since it preserves the character ordering of the two strings. So, given 
these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.
*/

var combineStrings = function(s1, s2, s3){
 if(s3.length < s1.length + s2.length){
 	return false;
 }

if(s1.length > 1){
	var x = s1.slice(0,1);
    var y = s1.slice(1,2);
    if(s3.indexOf(x) < s3.indexOf(y) && s3.indexOf(x) != -1){
    	return combineStrings(s1.slice(2), s2, s3);
    } else {
    	return false;
    }
}

if(s3.indexOf(s1[s1.length - 1]) === -1){
	return false
}

if(s2.length > 1){
	var x = s2.slice(0,1);
    var y = s2.slice(1,2);
    if(s3.indexOf(x) < s3.indexOf(y) && s3.indexOf(x) != -1){
    	return combineStrings(s1, s2.slice(2), s3);
    } else {
    	return false;
    }
}
if(s3.indexOf(s2[s2.length - 1]) === -1){
	return false
}

return true;
 	
};