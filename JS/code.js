"use strict";

// ЗАДАНИЕ 4
 function adition(arg1, arg2) {
 	return(arg1 + arg2);
 }
 alert(adition(20, 10));

 function subtraction(arg1, arg2) {
 	return(arg1 - arg2);
 }
 alert(subtraction(20, 10));

 function multiplication(arg1, arg2) {
 	return(arg1 * arg2);
 }
 alert(multiplication(20, 10));

  function division(arg1, arg2) {
 	return(arg1 / arg2);
 }
 alert(division(20, 10));

// ЗАДАНИЕ 5
let operation = prompt('Введите операцию, которую хотите выполнить:');

function mathOperation(arg1, arg2, operation) {
 	switch (operation) {
 		case 'adition':
	 		return adition(arg1, arg2);
	 	case 'subtraction':
	 		return subtraction(arg1, arg2);
	 	case 'multiplication':
	 		return multiplication(arg1, arg2);
	 	case 'division':
	 		return division(arg1, arg2);
 	}
}

alert(mathOperation(10, 30, operation));