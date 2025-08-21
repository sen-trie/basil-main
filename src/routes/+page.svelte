<script>
	import Cup from '$lib/assets/ui/cup.svelte';
</script>

<div class="body-container home-div" style:view-transition-name="main-content-main">
	<a class="cafe-button w-full" href="/cafe">
		<p class="flexbox"><Cup /> Visit the cafe!</p>
	</a>

	<h1>Categories</h1>
	<div class="category-grid">
		<div>
			<a href="/category/123" class="category-header">
				<img />
			</a>
			<p>TEST</p>
		</div>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
		<a class="category-header"><p>TEST</p></a>
	</div>

	<div class="author-div">
		<img class="author-img" src="" alt="author profile" />
		<section class="author-text">
			<h2>sentrie</h2>
			<h4>Baker, 3D Artist, Web Developer</h4>
			<br />
			<h3>Hi</h3>
			<a class="link-button" href="/about">About</a>
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

	.category-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 20px;
		gap: 25px;
		margin-bottom: 3rem;
	}

	.category-grid .category-header {
		position: relative;
		aspect-ratio: 1;
	}

	.category-header {
		img {
			width: 100%;
			height: 100%;
			background-color: aqua;
			view-transition-name: category-img;
		}

		p {
			position: absolute;
			bottom: 10px;
			left: 50%;
			translate: -50% 0;
			background-color: var(--colour-dark);
			color: var(--colour-white);
			padding: 0.5rem 2rem;
			font-size: 1.4rem;
		}
	}

	.author-div {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
	}

	.author-div .author-img {
		width: 250px;
		height: 250px;
		border-radius: 999px;
		background-color: white;
		translate: 75px 0;
	}

	.author-div .author-text {
		display: flex;
		flex-direction: column;
		background-color: var(--colour-dark-green);
		color: var(--colour-white);
		flex-grow: 1;
		padding: 55px 100px;
		min-height: 350px;
		margin-right: 100px;
	}

	.author-text a {
		width: fit-content;
		margin-top: auto;
	}
</style>
