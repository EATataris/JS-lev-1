"use strict";
//ЗАДАНИЕ 1
let a = [
	 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
	 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
	 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
]; 


let b = [];
a.forEach(function (arr) {
	b.push(arr.slice());
	let c = [];
	b.forEach(function (newArr) {
		c.push(Object.assign({}, newArr));
	});
});

/*let a = [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}];

let b = [];
a.forEach(function (arr) {
		b.push(Object.assign({}, arr));
});*/

//b[2][2].age = 5665;

console.log(a);
console.log(b);

//ЗАДАНИЕ 2 ??
let basket = [	{product: 'iPhone', price: 500}, 
				{product: 'Samsung', price: 450}, 
				{product: 'Sony', price: 400} 
			];

function countBasketPrice() {
	for (let i = 0; i < basket.length; i++) {
		let sum = 0;
		for (let j = 0; j < basket[i].length; j++) {
			//sum = sum + basket[i].price;
			//basket[i].price = sum;
			basket[i].price = 'fdf';
		}
	}
}

console.log(countBasketPrice());

//ЗАДАНИЕ 3
let count;
for (count = 0; count <= 9; count++) 
console.log(count);


//ЗАДАНИЕ 4
let pyramid = [];

for(let i = 0; i < 20; i++) {
	pyramid[i] = [];
	for(let j = 0; j <= i; j++) {
		pyramid[i][j] = 'x';
	}
	pyramid[i] = pyramid[i].join('');
} 

console.log(pyramid);