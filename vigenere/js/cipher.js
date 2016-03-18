"use strict";


/* 
 * In-/output for the HTML Handler
 */
function getCrypt(isDecrypt) {
	if (document.getElementById("myKey").value.length == 0) {
		alert("we'll need a secret code here matey!");
		return;
	}
	var key = filterKey(document.getElementById("myKey").value);
	if (key.length == 0) {
		alert("Too much rum maybe, we need some letters");
		return;
	}
	if (isDecrypt) {
		for (var i = 0; i < key.length; i++)
			key[i] = (26 - key[i]) % 26;
	}
	var textElem = document.getElementById("myTextArea");
	textElem.value = crypt(textElem.value, key);
}


/* 
 * Return of input
 */
function crypt(input, key) {
	var output = "";
	for (var i = 0, j = 0; i < input.length; i++) {
		var c = input.charCodeAt(i);
		if (isUppercase(c)) {
			output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
			j++;
		} else if (isLowercase(c)) {
			output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	return output;
}

function filterKey(key) {
	var result = [];
	for (var i = 0; i < key.length; i++) {
		var c = key.charCodeAt(i);
		if (isLetter(c))
			result.push((c - 65) % 32);
	}
	return result;
}


// test for letter
function isLetter(c) {
	return isUppercase(c) || isLowercase(c);
}

// test for uppercase
function isUppercase(c) {
	return c >= 65 && c <= 90;  // 65-A | 90-Z>
}

// test for lowercase
function isLowercase(c) {
	return c >= 97 && c <= 122;  // 97-a | 122-z
}
