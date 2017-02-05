var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [new Product({
		imagePath: 'http://v.albinos.com.ua/p/logan-derevyanniy-raskladnoy-stol-5282-product-10000-10000.jpeg',
		title: 'Стіл',
		description: 'Крутий стіл',
		price: 800
	}),
	new Product({
		imagePath: 'http://scene7.targetimg1.com/is/image/Target/50079222?wid=360&hei=360&qlt=80&fmt=pjpeg',
		title: 'Крісло',
		description: 'Круте крісло',
		price: 500
	}),
	new Product({
		imagePath: 'http://maystermebli.lviv.ua/published/publicdata/DJSVE116DZHINSOFF/attachments/SC/products_pictures/hc_enl-900x900_enl.jpg',
		title: 'Ліжко',
		description: 'Круте ліжко',
		price: 1000
	}),
	new Product({
		imagePath: 'http://www.moda-doma.com.ua/g_img/g839_0_ua.jpg',
		title: 'Письмовий стіл',
		description: 'Крутий письмовий стіл',
		price: 2500
	}),
	new Product({
		imagePath: 'http://meblikarpat.com.ua/wp-content/uploads/2015/06/florencia01_vis_5fix0001-copy.png',
		title: 'Ліжко1',
		description: 'Круте ліжко1',
		price: 1200
	}),
	new Product({
		imagePath: 'http://meblistyle.com.ua/img/large/Margo.jpg',
		title: 'Ліжко2',
		description: 'Круте ліжко2',
		price: 1400
	}),
];

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}