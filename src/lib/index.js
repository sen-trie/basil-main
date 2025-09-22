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
		dishes: ['Financier', 'Yuzu_Financier'],
		thumbnail: 'Financier'
	},
	Cheesecakes: {
		description:
			'Creamy, dreamy, and always a good idea. From classic to caramelized Basque-style, each slice is rich, smooth, and seriously satisfying.',
		dishes: [
			'Cheesecake',
			'Lemon_Basque_Cheesecake',
			'Earl_Grey_Basque_Cheesecake',
			'Brownie_Basque_Cheesecake',
			'Ube_Cheesecake'
		],
		thumbnail: 'Earl_Grey_Basque_Cheesecake'
	},
	'Layer Cakes': {
		description: 'Multi-layered cakes with filling between each layer, stacked and decorated.',
		dishes: ['Vanilla_Birthday_Cake'],
		thumbnail: 'Vanilla_Birthday_Cake'
	},
	Tarts: {
		description:
			'Buttery, crumbly crusts filled with bright, creamy, or nutty goodness. A beautiful balance of texture and flavor in every slice.',
		dishes: ['Pistachio_Tart', 'Yuzu_Lemon_Tart'],
		thumbnail: 'Pistachio_Tart'
	},
	'Custards & Puddings': {
		description:
			'Comfort food at its finest. Silky, spoonable, and wonderfully wobbly desserts that feel like a warm hug.',
		dishes: ['Chocolate_Crème_Brûlée', 'Bread_Pudding', 'Brownie_Tiramisu'],
		thumbnail: 'Brownie_Tiramisu'
	},
	Cookies: {
		description:
			'Baked fresh, with a perfect chew. Our cookies are soft-centered, slightly crisp-edged, and totally irresistible.',
		dishes: ['Chewy_Chocolate_Cookie', 'White_Chocolate_Matcha_Cookie', 'Alfajores'],
		thumbnail: 'Chewy_Chocolate_Cookie'
	},
	Cupcakes: {
		description:
			'A little celebration in a wrapper. Fluffy cake topped with a cloud of frosting—simple, sweet, and always delightful.',
		dishes: ['Red_Velvet_Cupcake'],
		thumbnail: 'Red_Velvet_Cupcake'
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
