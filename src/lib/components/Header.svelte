<script>
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	// import Search from '$lib/assets/ui/search.svelte';

	let recipeVal = $state('');

	const images = getContext('images');
</script>

<header>
	<div class="flexbox body-container header-wrapper">
		<div class="flexbox">
			<a class="flexbox" href="/">
				<img class="header-img" src={images['logo.webp']} alt="logo" />
			</a>
		</div>

		<div class="flexbox desktop-nav">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/recipes" class:active={$page.url.pathname.startsWith('/recipes')}>Recipes</a>
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		</div>

		<a class="cafe-button" href="https://explore.basilclub.cafe">Visit cafe</a>
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--colour-white);
		border-bottom: 2px solid rgba(0, 0, 0, 0.3);
		view-transition-name: header;
	}

	.header-wrapper {
		padding: 8px 32px 8px;
		align-items: center;
		justify-content: space-between;
	}

	.header-img {
		height: 80px;
		width: auto;
		aspect-ratio: 1;
	}

	.desktop-nav {
		a {
			position: relative;
			margin-left: 40px;
			font-size: 1.4rem;

			transition: 0.2s ease;
		}

		a:not(.flexbox) {
			padding-bottom: 4px;
		}

		a.active {
			color: var(--colour-dark-green);
		}

		a.active::before {
			content: '';
			position: absolute;
			width: 100%;
			bottom: -3px;
			border-bottom: 3px solid transparent;
			border-color: var(--colour-dark-green);
			view-transition-name: active-page;
		}
	}

	.cafe-button {
		background-color: var(--colour-black);
		color: var(--colour-white);
		padding: 8px 32px;
		font-size: 1.2rem;
		font-weight: 700;
		border-radius: 25px;
	}

	@media (max-width: 768px) {
		.desktop-nav,
		.cafe-button {
			display: none;
		}

		.header-img {
			height: 60px;
		}

		.header-wrapper {
			padding: 8px 16px;
		}
	}
</style>
