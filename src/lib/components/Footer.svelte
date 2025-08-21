<script>
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-links">
		<a href="/about">About</a>
		<a href="/about">Contact</a>
		<a href="/about">Source Code</a>
	</div>
	<p class="footer-credit">© {year} · sentrie · Built in Svelte 5</p>
</footer>

<style>
	footer {
		background-color: white;
	}

	.footer-links {
		margin: 0 auto;
		width: fit-content;
	}

	.footer-credit {
		width: fit-content;
		margin: 0 auto;
	}
</style>
