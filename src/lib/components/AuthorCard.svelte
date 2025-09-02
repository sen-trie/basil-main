<script>
	let { images } = $props();
</script>

<div class="author-div">
	<img class="author-img" src={images['avatar.webp']} alt="author profile" />
	<section class="author-text">
		<h2>sentrie</h2>
		<h4><i>Baker, 3D Artist, Web Developer</i></h4>
		<h3>
			Someone who's just starting out baking, experimenting with recipes and documenting what turns
			out tasty. Each entry documents another step in the learning process, one recipe at a time.
		</h3>
		<div class="flexbox link-container">
			<a href="https://github.com/sen-trie" target="_blank" aria-label="link" class="social-link">
				<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
					<path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/>
				</svg>
			</a>
			<a
				href="https://www.youtube.com/@IAM_SENTRY"
				target="_blank"
				aria-label="link"
				class="social-link"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
					<path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
					<path d="M10 9l5 3l-5 3z" />
				</svg>
			</a>
			<a
				href="https://www.reddit.com/u/IAM_Sentry"
				target="_blank"
				aria-label="link"
				class="social-link"
			>
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
			<a href="/about" class="about-button">About</a>
		</div>
	</section>
</div>

<style lang="scss">
	.author-div {
		$author-width: 180px;
		$author-padding: 2rem;

		display: flex;
		align-items: center;
		padding: 0 calc($author-width / 1.5) 0 $author-padding;
		stroke: light-dark(var(--light-bg), var(--dark-bg));

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
			background-color: light-dark(var(--light-green-deep), var(--dark-green-deep));
			color: light-dark(var(--light-bg), var(--dark-bg));
			flex-grow: 1;
			padding: 40px 48px 40px calc($author-width / 3 + 24px);
			min-height: fit-content;

			h3 {
				font-weight: 400;
				flex-grow: 1;
				margin: 16px 0;
				padding-right: 24px;
			}

			.link-container {
				align-items: center;

				.social-link {
					width: 50px;
					height: 50px;
					margin-right: 12px;
					margin-bottom: 6px;

					&:first-of-type {
						margin-right: 8px;
					}
				}

				.about-button {
					height: fit-content;
					margin-left: auto;
					font-size: 1.2rem;
					background-color: light-dark(var(--light-bg), var(--dark-bg));
					color: light-dark(var(--light-green-deep), var(--dark-green-deep));
					font-weight: 600;
					padding: 7px 32px;
				}
			}
		}
	}

	@media (max-width: 768px) {
		.author-div {
			flex-direction: column;
			padding: 0px;
			margin-top: -48px;

			.author-img {
				width: 140px;
				translate: 0 52px;
			}

			.author-text {
				width: 100%;
				padding: 60px 20px 24px 20px;

				h3 {
					margin: 24px 0;
				}

				.social-link {
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-bottom: 0 !important;
					margin-right: 4px !important;

					svg {
						width: 40px;
						height: 40px;
					}
				}
			}
		}
	}
</style>
