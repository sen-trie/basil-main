<div class="category-header">
	<div class="flexbox">
		<img />
		<div class="category-content">
			<h1 class="category-text"><i>Cake</i></h1>
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
		background-color: var(--colour-green);
		color: var(--colour-dark-green);

		> div {
			max-width: 1500px;
			padding: 35px 30px;
			margin: 0 auto;

			img {
				width: 150px;
				height: 150px;
				background-color: aqua;
				view-transition-name: category-img;
				margin-right: 3rem;
			}

			.category-content {
				padding: 15px;
				margin-bottom: 1rem;
			}

			.category-text {
				view-transition-name: category-text;
			}

			h1 {
				margin-bottom: 5px;
			}

			h2 {
				font-size: 1.3rem;
				font-weight: 500;
				color: var(--colour-black);
			}
		}
	}
</style>
