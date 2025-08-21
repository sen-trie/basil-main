<script>
	const year = new Date().getFullYear();
</script>

<footer class="flexbox">
	<div class="footer-links flexbox">
		<a href="/about">About</a>
		<a href="/about">Contact</a>
		<a href="/about">Source Code</a>
	</div>
	<p class="footer-credit">© {year} sentrie · Built in Svelte 5</p>
</footer>

<style>
	footer {
		width: 100%;
		padding: 20px 4rem;
		justify-content: space-between;
		background-color: var(--colour-black);
		view-transition-name: footer;
	}

	.footer-links {
		color: var(--colour-white);
		opacity: 0.5;
		width: fit-content;
		gap: 3rem;
	}

	.footer-credit {
		color: var(--colour-light);
		width: fit-content;
	}
</style>
