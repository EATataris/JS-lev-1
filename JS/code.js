"use strict";
//ЗАДАНИЕ 1
let number = parseInt(prompt('Введите число от 0 до 999:'));

function getNubmerInObject(number) {	
	let numberObject = {};
	let numberArr = [];
	while (number) {
		numberArr.push(number % 10);
		number = Math.floor(number / 10);
	} 
	if (numberArr.length > 3) {
			console.log('Ошибка! Вы ввели чило больше 999');
			console.log(numberObject);
	} else if (numberArr.length === 3) {
		numberObject['ones'] = numberArr[0];
		numberObject['tens'] = numberArr[1];
		numberObject['hundreds'] = numberArr[2];
		console.log(numberObject);
		//return numberArr;
	} else if (numberArr.length === 2) {
		numberObject['ones'] = numberArr[0];
		numberObject['tens'] = numberArr[1];
		console.log(numberObject);
		//return numberArr;
	} else if (numberArr.length === 1) {
		numberObject['ones'] = numberArr[0];
		console.log(numberObject);
		//return numberArr;
	} else if (number === 0) {
		console.log("Object is null");
		console.log(numberObject);
	}
}

getNubmerInObject(number);