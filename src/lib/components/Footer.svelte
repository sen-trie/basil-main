<script>
	const year = new Date().getFullYear();
</script>

<footer class="body-container">
	<div class="footer-wrapper flexbox">
		<div class="footer-links flexbox">
			<a href="/about">About</a>
			<a href="https://github.com/sen-trie/basil-main">Source code</a>
		</div>
		<p class="footer-credit">© {year} sentrie · Built in Svelte 5</p>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		padding: 20px 40px;
		background-color: light-dark(var(--light-bg), var(--dark-bg));
		view-transition-name: footer;
		color: light-dark(var(--light-text-strong), var(--dark-text-strong));

		.footer-wrapper {
			margin: 0 auto;
			max-width: 1200px;
			justify-content: space-between;
		}

		.footer-links {
			opacity: 0.7;
			width: fit-content;
			gap: 3rem;
		}

		.footer-credit {
			width: fit-content;
		}
	}

	@media (max-width: 768px) {
		footer {
			padding: 10px 10px;

			.footer-wrapper {
				flex-direction: column;
				gap: 10px;
			}

			.footer-links {
				text-align: center;
			}
		}
	}
</style>
