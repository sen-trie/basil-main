import { error } from '@sveltejs/kit';
import { categories } from '$lib';

export async function load({ params }) {
	const slug = params.slug;

	if (!Object.keys(categories).includes(slug)) {
		throw error(404, 'Category not found');
	}

	return {
		slug,
		...categories[slug]
	};
}
