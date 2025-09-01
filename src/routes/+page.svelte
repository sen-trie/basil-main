<script>
	import AuthorCard from '$lib/components/AuthorCard.svelte';
	import Cup from '$lib/assets/ui/cup.svelte';
	import { categories } from '$lib';
	import { getContext } from 'svelte';

	const images = getContext('images');
</script>

{#snippet categoryCard(catName)}
	<div class="category-block">
		<a href="/category/{catName}" class="category-header" aria-label="link">
			<img
				src={images['avatar.webp']}
				style="view-transition-name: category-img-{catName.split(' ')[0]}"
				alt="category"
			/>
		</a>
		<h2 class="category-text">{catName}</h2>
	</div>
{/snippet}

<div class="body-container home-div" style:view-transition-name="main-content-main">
	<a class="cafe-big-button w-full" href="https://explore.basilclub.cafe">
		<h2 class="flexbox"><Cup /> Visit the cafe!</h2>
	</a>

	<h1>Categories</h1>
	<div class="category-grid">
		{#each Object.keys(categories) as categoryName, index}
			{@render categoryCard(categoryName, index)}
		{/each}
	</div>

	<AuthorCard {images} />
</div>

<style lang="scss">
	.cafe-big-button {
		position: relative;
		display: block;
		background-color: white;
		width: min(800px, 100%);
		height: 250px;
		border: 5px solid var(--colour-dark);
		border-radius: 15px;
		margin: 0 auto 2rem;
		background-image: url('/cafe-bg.webp');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;

		h2 {
			color: var(--colour-white);
			background-color: var(--colour-dim);
			padding: 6px 16px;
			font-weight: 700;
			position: absolute;
			bottom: 1rem;
			right: 1rem;
		}
	}

	.category-block {
		display: flex;
		flex-direction: column;
	}

	.category-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 40px 40px;
		row-gap: 40px;
		column-gap: 48px;
		margin-bottom: 1rem;

		.category-header {
			position: relative;
			display: block;
			aspect-ratio: 1;
			width: 100%;
			height: auto;
			margin-bottom: 1rem;

			img {
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
		}

		.category-text {
			width: 100%;
			color: var(--colour-dark);
			font-weight: 700;
			text-align: center;
		}
	}

	@media (max-width: 768px) {
		.category-grid {
			grid-template-columns: repeat(2, 1fr);
			padding: 12px;
			gap: 20px;

			h2 {
				font-size: 1.3rem;
				line-height: 1.6rem;
			}
		}
	}
</style>
