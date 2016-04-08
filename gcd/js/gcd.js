"use strict";

function calc() {
    var aString = document.getElementById('inputA').value;
    var bString = document.getElementById('inputB').value;
    var output;
    
    if (a == "" || b == "")
        output = "";
    else if (!isInterger(aString) || !isInterger(bString))
        output = " this no integer it is";
    else {
        var a = parseInt(aString, 10);
        var b = parseInt(bString, 10);
        // got some doc about largest number.
        if (a < 0 || a >= 9007199254740992 || b < 0 || b >= 9007199254740992)
			output = "Number is toooo damn high";
		else
			output = gcd(Math.abs(a), Math.abs(b)).toString(10);
    }
    document.getElementById("output").value = output;
    
}

function gcd(a, b) {
    while (b != 0) {
        var c = a % b;
        a = b;
        b = c;
    }
    return a;
}

function isInterger(string) {
    return /^-?\d+$/.test(string);
}