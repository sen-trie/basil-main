<script>
	const year = new Date().getFullYear();
</script>

<footer class="flexbox body-container">
	<div class="footer-links flexbox">
		<a href="/about">About</a>
		<a href="/about">Source Code</a>
	</div>
	<p class="footer-credit">© {year} sentrie · Built in Svelte 5</p>
</footer>

<style>
	footer {
		padding: 20px 40px;
		justify-content: space-between;
		background-color: var(--colour-white);
		view-transition-name: footer;
		color: var(--colour-black);
	}

	.footer-links {
		opacity: 0.7;
		width: fit-content;
		gap: 3rem;
	}

	.footer-credit {
		width: fit-content;
	}
</style>
