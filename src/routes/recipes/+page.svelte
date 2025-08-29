<script>
	import RecipeGrid from '$lib/components/RecipeGrid.svelte';
	import { getContext } from 'svelte';
	import { allDishes as dishes } from '$lib';

	const images = getContext('images');
</script>

<div class="body-container">
	<h1>All Recipes</h1>
	<RecipeGrid {dishes} {images} />
</div>
