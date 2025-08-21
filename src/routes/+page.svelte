<div class="body-container home-div">
	<a class="cafe-button w-full" href="/cafe"> Visit the cafe!</a>

	<h1>Categories</h1>
	<div class="category-grid">
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
		<a class="category-button"><p>TEST</p></a>
	</div>

	<div class="author-div">
		<img class="author-img" src="" alt="author profile" />
		<section class="author-text">
			<h2>sentrie</h2>
			<h4>Baker, 3D Artist, Web Developer</h4>
			<br />
			<h3>Hi</h3>
			<a href="/about">About</a>
		</section>
	</div>
</div>

<style>
	.cafe-button {
		display: block;
		background-color: white;
		width: min(800px, 100%);
		height: 250px;
		border-radius: 15px;
		margin: 2rem auto 3rem;
	}

	.category-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 20px;
		gap: 25px;
		margin-bottom: 3rem;
	}

	.category-grid .category-button {
		position: relative;
		background-color: teal;
		aspect-ratio: 1;
	}

	.category-button p {
		position: absolute;
		bottom: 10px;
		left: 50%;
		translate: -50% 0;
		background-color: var(--colour-dark);
		color: var(--colour-white);
		padding: 0.5rem 2rem;
		font-size: 1.4rem;
	}

	.author-div {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
	}

	.author-div .author-img {
		width: 300px;
		height: 300px;
		border-radius: 999px;
		background-color: white;
		translate: 75px 0;
	}

	.author-div .author-text {
		display: flex;
		flex-direction: column;
		background-color: gold;
		flex-grow: 1;
		padding: 55px 100px;
		min-height: 400px;
		margin-right: 100px;
	}

	.author-text a {
		width: fit-content;
		margin-top: auto;
	}
</style>
