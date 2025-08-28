import { error } from '@sveltejs/kit';

export const entries = async () => {
	return [{ slug: '123' }];
};

export async function load({ params }) {
	const slug = params.slug;

	return {
		slug
	};
}
