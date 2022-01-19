"use strict";

let elements = document.querySelectorAll(".glitch");
let i = 0;
let forbiddenSymbols = ['\r\n', '\r', '\n', '\t', ' '];

let numOfGlitches = parseInt(2 + Math.random() * 9, 10);
let elemIndex = parseInt(Math.random() * elements.length, 10);
let charIndex = parseInt(Math.random() * elements[elemIndex].childNodes[0].nodeValue.length, 10);
let backupChar = elements[elemIndex].childNodes[0].nodeValue[charIndex];

function replaceAt(string, index, value) {
	return string.substring(0, index) + value + string.substring(index + 1);
}

function glitch() {	
	
	if (i < numOfGlitches && forbiddenSymbols.indexOf(backupChar) == -1) {
		elements[elemIndex].childNodes[0].nodeValue = replaceAt(elements[elemIndex].childNodes[0].nodeValue, charIndex,
		String.fromCharCode(parseInt(33 + Math.random() * 15, 10)));
		
		++i;		
		setTimeout(glitch, 200);
	}
	else {
		i = 0;
		elements[elemIndex].childNodes[0].nodeValue = replaceAt(elements[elemIndex].childNodes[0].nodeValue, charIndex, backupChar);
		
		numOfGlitches = parseInt(2 + Math.random() * 9, 10);
		elemIndex = parseInt(Math.random() * elements.length, 10);
		charIndex = parseInt(Math.random() * elements[elemIndex].childNodes[0].nodeValue.length, 10);
		backupChar = elements[elemIndex].childNodes[0].nodeValue[charIndex];
		
		setTimeout(glitch, 3000);
	}
}

glitch();