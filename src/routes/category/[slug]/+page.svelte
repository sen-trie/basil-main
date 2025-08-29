<script>
	let { data } = $props();
	let { slug } = data;

	import { getContext } from 'svelte';
	const images = getContext('images');
</script>

<div class="category-header">
	<div class="body-container flexbox">
		<img
			src={images['avatar.webp']}
			style="view-transition-name: category-img-{slug.replace(/ /g, '')}"
			alt="category img"
		/>
		<div class="category-content">
			<h1 class="category-text"><i>{slug}</i></h1>
			<h2>Sweet treats perfect for celebrations, desserts, and special occasions.</h2>
		</div>
	</div>
</div>

<div class="body-container">
	<p>123</p>
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
</style>
