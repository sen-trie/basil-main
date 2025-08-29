<script>
	let { data } = $props();
	let { slug, dishes, description } = data;

	import { getContext } from 'svelte';
	const images = getContext('images');
</script>

{#snippet categoryCard(dishName)}
	<div class="dish-block">
		<a href="/recipes/{dishName}" class="dish-header" aria-label="link">
			<img src={images['avatar.webp']} alt="dish" />
		</a>
		<h2 class="dish-text">{dishName.replaceAll('_', ' ')}</h2>
	</div>
{/snippet}

<div class="category-header">
	<div class="body-container flexbox">
		<img
			src={images['avatar.webp']}
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
	<div class="dish-grid">
		{#each dishes as dish, index}
			{@render categoryCard(dish, index)}
		{/each}
	</div>
</div>

<style lang="scss">
	.category-header {
		height: fit-content;
		background-color: var(--colour-light-green);
		color: var(--colour-dark-green);

		> div {
			max-width: 1500px;
			padding: 35px 30px;
			margin: 0 auto;

			img {
				width: 150px;
				height: 150px;
				border-radius: 100%;
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

	.dish-block {
		display: flex;
		flex-direction: column;
	}

	.dish-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 40px 40px;
		row-gap: 40px;
		column-gap: 32px;
		margin-bottom: 1rem;

		.dish-header {
			position: relative;
			display: block;
			aspect-ratio: 10/16;
			width: 100%;
			height: auto;
			margin-bottom: 1rem;

			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		.dish-text {
			width: 100%;
			color: var(--colour-dark);
			font-weight: 700;
			text-align: center;
		}
	}
</style>
