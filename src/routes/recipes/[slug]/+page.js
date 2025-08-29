import { error } from '@sveltejs/kit';

const files = import.meta.glob('$lib/recipes/*.json', {
	query: '?raw',
	import: 'default'
});

export async function load({ params }) {
	const slug = params.slug;
	const path = `/src/lib/recipes/${slug}.json`;

	const importer = files[path];
	if (!importer) {
		throw error(404, 'Recipe not found');
	}

	const raw = await importer();

	return {
		slug,
		content: raw
	};
}
