export const categories = {
	'Lava Cakes': {
		description:
			'Warm, gooey, and utterly decadent. Break through the soft cake to find a surprise molten center. Pure comfort in a ramekin.',
		dishes: ['Chocolate_Lava_Cake', 'Matcha_Lava_Cake', 'Lemon_Molten_Cake'],
		thumbnail: 'Chocolate_Lava_Cake'
	},
	'Tea Cakes': {
		description:
			'Little bites of heaven. Perfect with a cup of coffee or tea, these delicate cakes are moist, flavorful, and just the right amount of sweet.',
		dishes: ['Canele', 'Financier', 'Yuzu_Financier', 'Banh_Bo_Nuong', 'Bolu_Karamel_Sarang_Semut', 'Maple_Scone'],
		thumbnail: 'Canele'
	},
	Cheesecakes: {
		description:
			'Creamy, dreamy, and always a good idea. From classic to caramelized Basque-style, each slice is rich, smooth, and seriously satisfying.',
		dishes: [
			'Cheesecake',
			'Lemon_Basque_Cheesecake',
			'Earl_Grey_Basque_Cheesecake',
			'Salted_Caramel_Brownie_Basque_Cheesecake',
			'Blueberry_Crumble_Cheesecake',
			'Ube_Cheesecake',
			'Brownie_Basque_Cheesecake'
		],
		thumbnail: 'Earl_Grey_Basque_Cheesecake'
	},
	'Simple Cakes': {
	description:
		'Easy, unfussy cakes made with minimal steps, often mixed in a single bowl. Moist, rich, and homey with a focus on simplicity rather than decoration or layers.',
		dishes: ['Chocolate_Cake'],
		thumbnail: 'Chocolate_Cake'
	},
	'Layer Cakes': {
		description: 'Multi-layered cakes with filling between each layer, stacked and decorated.',
		dishes: ['Vanilla_Birthday_Cake', 'Tahini_Layer_Cake', 'Milhojas'],
		thumbnail: 'Vanilla_Birthday_Cake'
	},
	'Steamed Cakes': {
		description:
			'Traditional steamed desserts set with rice or starch flours. Chewy, elastic, and delicately sweet, often layered or molded rather than baked.',
		dishes: ['Banh_Da_Lon', 'Kuih_Bingka'],
		thumbnail: 'Banh_Da_Lon'
	},
	'Breads': {
	description:
		'Simple, rustic, and foundational baked goods. These breads are defined by texture, fermentation, and aroma rather than sweetness.',
		dishes: ['Sourdough_Discard_Focaccia'],
		thumbnail: 'Sourdough_Discard_Focaccia'
}	,
	Tarts: {
		description:
			'Buttery, crumbly crusts filled with bright, creamy, or nutty goodness. A beautiful balance of texture and flavor in every slice.',
		dishes: ['Pistachio_Tart', 'Yuzu_Lemon_Tart', 'Pastel_De_Nata'],
		thumbnail: 'Pistachio_Tart'
	},
	'Custards & Puddings': {
		description:
			'Comfort food at its finest. Silky, spoonable, and wonderfully wobbly desserts that feel like a warm hug.',
		dishes: [
			'Chocolate_Crème_Brûlée',
			'Bread_Pudding',
			'Bread_And_Butter_Pudding',
			'Pan_Pudding',
			'Brownie_Tiramisu',
			'Souffle',
			'Brazo_De_Mercedes',
			'Flan',
			'Migliaccio'
		],
		thumbnail: 'Brownie_Tiramisu'
	},
	Cookies: {
		description:
			'Baked fresh, with a perfect chew. The cookies are soft-centered, slightly crisp-edged, and totally irresistible.',
		dishes: [
			'Chewy_Chocolate_Cookie',
			'White_Chocolate_Matcha_Cookie',
			'Lemon_Basil_Cookie',
			'Alfajores',
			'Maamoul',
			'Tahini_Brownie'
		],
		thumbnail: 'Chewy_Chocolate_Cookie'
	},
	Cupcakes: {
		description:
			'A little celebration in a wrapper. Fluffy cake topped with a cloud of frosting—simple, sweet, and always delightful.',
		dishes: ['Red_Velvet_Cupcake', 'Chocolate_Cupcake'],
		thumbnail: 'Red_Velvet_Cupcake'
	},
	'Quick Breads & Loaves': {
		description:
			'Hearty, moist, and perfect for any time of day. These comforting baked goods are wonderful warm with butter or as a sweet snack.',
		dishes: ['Double_Chocolate_Banana_Bread', 'Browned_Butter_Banana_Bread', 'Tahini_Banana_Bread'],
		thumbnail: 'Double_Chocolate_Banana_Bread'
	},
	Confections: {
		description:
			'Decadent chocolate treats and sweet confections. Perfect for gifting or indulging.',
		dishes: ['Pecan_Chocolate_Bark', 'Hawaiian_Butter_Mochi'],
		thumbnail: 'Pecan_Chocolate_Bark'
	}
};

export const allDishes = Object.values(categories).flatMap((category) => category.dishes);

export function getCategoryFromDish(dishName) {
	for (const [category, data] of Object.entries(categories)) {
		if (data.dishes.includes(dishName)) {
			return category;
		}
	}
	return null;
}
