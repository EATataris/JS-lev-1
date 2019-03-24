//ЗАДАНИЕ 2
let products = [{name: 'Apple', price: 500}, 
				{name: 'Samsung', price: 450}, 
				{name: 'Sony', price: 400},
				{name: 'Xiaomi', price: 350},
				{name: 'Huawei', price: 350}
			];

let basket = {
	goodList: [],
	countTotalPrice(goodList) {
		let TotalPrice = 0;
		for (let i = 0; i < goodList.length; i++) {
			TotalPrice = TotalPrice + goodList[i].price * goodList[i].count;		
		}
		return TotalPrice;
	},
	countTotalNumber(goodList) {
		let TotalNumber = 0;
		for (let i = 0; i < goodList.length; i++) {
			TotalNumber = TotalNumber + goodList[i].count;
		}
		return TotalNumber;
	},
	putProduct() {
		let item = {};
		for (let i = 0; i < products.length; i++) {
			item = Object.assign({}, products[i]);
			//item['name'] = products[i]['name'];
			basket.goodList.push(item);
			if (i % 2 === 0) {
				item['count'] = 1;
			} else {
				item['count'] = 2;
			}
		}
	}
};

basket.putProduct();
console.log(basket);
console.log(`Total Basket Price is: ${basket.countTotalPrice(basket.goodList)}`);
console.log(`Total Basket Number is: ${basket.countTotalNumber(basket.goodList)}`);