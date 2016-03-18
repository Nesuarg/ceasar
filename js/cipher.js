"use strict";


/*
 * When pirates need to cript / decrypt some text so nobody will find out.
 * 
 */
function getCrypt(Decrypt) {
	var shiftText = document.getElementById("myShifter").value;
	if (!/^-?\d+$/.test(shiftText)) {
		alert("Argh, matey..! put in an integer");
		return;
	}
	var shift = parseInt(shiftText, 10);
	if (shift < 0 || shift >= 26) {
		alert("%%/#! Ahooty! what didn't you get about 0-26");
		return;
	}
	if (Decrypt)
		shift = (26 - shift) % 26;
	var textElem = document.getElementById("myTextArea");
	textElem.value = caesarShift(textElem.value, shift);
}



function caesarShift(text, shift) {
	var result = "";
	for (var item = 0; item < text.length; item++) {
		var x = text.charCodeAt(item);
		if      (x >= 65 && x <=  90) result += String.fromCharCode((x - 65 + shift) % 26 + 65);  // Uppercase
		else if (x >= 97 && x <= 122) result += String.fromCharCode((x - 97 + shift) % 26 + 97);  // Lowercase
		else                          result += text.charAt(item);  // Copy
	}
	return result;
}