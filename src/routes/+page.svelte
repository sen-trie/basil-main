<script>
	import Cup from '$lib/assets/ui/cup.svelte';
	import { getContext } from 'svelte';

	const images = getContext('images');
</script>

{#snippet category(tee)}
	<div class="category-block">
		<a href="/category/123" class="category-header" aria-label="link">
			<img style="view-transition-name: category-img-{tee}" alt="category" />
		</a>
		<p class="category-text">Cake {tee}</p>
	</div>
{/snippet}

<div class="body-container home-div" style:view-transition-name="main-content-main">
	<a class="cafe-button w-full" href="https://explore.basilclub.cafe">
		<p class="flexbox"><Cup /> Visit the cafe!</p>
	</a>

	<h1>Categories</h1>
	<div class="category-grid">
		{#each Array(10) as i, index}
			{@render category(index)}
		{/each}
	</div>

	<div class="author-div">
		<img class="author-img" src={images['avatar.webp']} alt="author profile" />
		<section class="author-text">
			<h2>sentrie</h2>
			<h4>Baker, 3D Artist, Web Developer</h4>
			<h3>
				Someone who's just starting out baking, experimenting with recipes and documenting what
				turns out tasty. Each entry documents another step in the learning process, one recipe at a
				time.
			</h3>
			<div class="flexbox link-container">
				<a href="https://github.com/sen-trie" target="_blank" aria-label="link">
					<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
						<path
							d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
						/>
					</svg>
				</a>
				<a href="https://www.youtube.com/@IAM_SENTRY" target="_blank" aria-label="link">
					<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
						<path
							d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
						/>
						<path d="M10 9l5 3l-5 3z" />
					</svg>
				</a>
				<a href="https://www.reddit.com/u/IAM_Sentry" target="_blank" aria-label="link">
					<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
						<path
							d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"
						/>
						<path d="M12 8l1 -5l6 1" />
						<path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
						<circle cx="9" cy="13" r=".5" fill="currentColor" />
						<circle cx="15" cy="13" r=".5" fill="currentColor" />
						<path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
					</svg>
				</a>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.cafe-button {
		position: relative;
		display: block;
		background-color: white;
		width: min(800px, 100%);
		height: 250px;
		border: 5px solid var(--colour-dark);
		border-radius: 15px;
		margin: 2rem auto 3rem;
		background-image: url('/cafe-bg.webp');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;

		p {
			color: var(--colour-white);
			background-color: var(--colour-dim);
			padding: 6px 16px;
			font-weight: 700;
			position: absolute;
			bottom: 1rem;
			right: 1rem;
			font-size: 1.8rem;
		}
	}

	.category-block {
		display: flex;
		flex-direction: column;
	}

	.category-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 20px;
		gap: 25px;
		margin-bottom: 3rem;

		.category-header {
			position: relative;
			display: block;
			aspect-ratio: 1;
			width: 100%;
			height: auto;
			max-height: 90%;

			img {
				width: 100%;
				height: 100%;
				background-color: aqua;
			}
		}

		.category-text {
			width: 100%;
			background-color: var(--colour-dark);
			color: var(--colour-white);
			padding: 10px 16px;
			font-size: 1.4rem;
		}
	}

	.author-div {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
	}

	.author-div {
		$author-width: 200px;
		padding: 0 calc(10rem + $author-width / 2) 0 10rem;
		stroke: var(--colour-white);

		.author-img {
			width: $author-width;
			aspect-ratio: 1;
			border-radius: 999px;
			background-color: white;
			translate: calc($author-width / 3) 0;
		}

		.author-text {
			display: flex;
			flex-direction: column;
			background-color: var(--colour-dark-green);
			color: var(--colour-white);
			flex-grow: 1;
			padding: 35px calc($author-width / 3 + 25px);
			min-height: fit-content;

			h3 {
				flex-grow: 1;
				margin: 16px 0;
			}

			a {
				width: fit-content;
				margin-top: auto;
				font-size: 1.2rem;
			}

			.link-container a:first-of-type {
				margin-right: 8px;
			}

			.link-container a {
				margin-right: 12px;
				width: 50px;
				height: 50px;
				margin-bottom: 6px;
			}
		}
	}
</style>
