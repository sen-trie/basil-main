<script>
	import RecipeGrid from '$lib/components/RecipeGrid.svelte';
	import { getContext } from 'svelte';
	import { allDishes as dishes } from '$lib';

	const images = getContext('images');
</script>

<svelte:head>
	<title>Recipes • Basil Club</title>
</svelte:head>

<div class="body-container">
	<h1>All Recipes</h1>
	<RecipeGrid dishes={dishes.sort()} {images} />
</div>
