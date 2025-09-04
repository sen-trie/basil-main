<script>
	let { dishes, images } = $props();
</script>

<div class="dish-grid">
	{#each dishes as dishName, index}
		<div class="dish-block">
			<a href="/recipes/{dishName}" class="dish-header" aria-label="link">
				<img src={images[`recipes/${dishName}.webp`]} alt="dish" loading="lazy" />
			</a>
			<h2 class="dish-text">{dishName.replaceAll('_', ' ')}</h2>
		</div>
	{/each}
</div>

<style lang="scss">
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
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.dish-text {
			width: 100%;
			color: light-dark(var(--light-accent-strong), var(--dark-accent-strong));
			font-weight: 700;
			text-align: center;
		}
	}

	@media (max-width: 768px) {
		.dish-grid {
			grid-template-columns: repeat(2, 1fr);
			padding: 16px 8px;
			gap: 16px;

			.dish-header {
				aspect-ratio: 12 / 16;
				margin-bottom: 8px;
			}

			.dish-text {
				font-size: 1.3rem;
				line-height: 1.7rem;
			}
		}
	}
</style>
