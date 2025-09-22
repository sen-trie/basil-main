<script>
	let { data } = $props();
	let { slug, dishes, description, thumbnail } = data;
	import RecipeGrid from '$lib/components/RecipeGrid.svelte';

	import { getContext } from 'svelte';
	const images = getContext('images');
</script>

<div class="category-header">
	<div class="body-container flexbox">
		<img
			src={images[`recipes/${thumbnail}.webp`]}
			style="view-transition-name: category-img-{slug.split(' ')[0]}"
			alt="category img"
		/>
		<div class="category-content">
			<h1 class="category-text"><i>{slug}</i></h1>
			<h2>{description}</h2>
		</div>
	</div>
</div>

<div class="body-container">
	<h1>Recipes</h1>
	<RecipeGrid {dishes} {images} />
</div>

<style lang="scss">
	.category-header {
		height: fit-content;
		background-color: light-dark(var(--light-green), var(--dark-green));
		color: light-dark(var(--light-green-deep), var(--dark-green-deep));

		> div {
			max-width: 1500px;
			padding: 35px 30px;
			margin: 0 auto;

			img {
				width: 150px;
				height: 150px;
				border-radius: 100%;
				object-fit: cover;
			}

			.category-content {
				padding: 15px;
				margin-bottom: 1rem;
			}

			h1 {
				margin-bottom: 5px;
			}

			h2 {
				font-size: 1.3rem;
				font-weight: 500;
			}
		}
	}

	@media (max-width: 768px) {
		.category-header .body-container {
			flex-direction: column;
			padding: 20px 12px;
			gap: 12px;

			.category-content {
				padding: 0 8px;
				margin-bottom: 0;

				h1 {
					text-align: center;
				}
			}
		}
	}
</style>
