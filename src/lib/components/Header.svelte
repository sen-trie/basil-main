<script>
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import Search from '$lib/assets/ui/search.svelte';

	let recipeVal = $state('');

	const images = getContext('images');
</script>

<header class="flexbox">
	<div class="flexbox desktop-nav">
		<a class="flexbox" href="/">
			<img class="header-img" src={images['logo.webp']} alt="logo" />
		</a>
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/recipes" class:active={$page.url.pathname.startsWith('/recipes')}>Recipes</a>
		<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
	</div>

	<div class="flexbox">
		<form role="search" method="get" class="flexbox">
			<div class="search-box flexbox">
				<input type="text" bind:value={recipeVal} placeholder="Search recipes" />
			</div>
			<button class="flexbox search-button">
				<Search />
			</button>
		</form>
		<a href="/cafe">Visit Cafe</a>
	</div>
</header>

<style>
	header {
		position: sticky;
		justify-content: space-between;
		width: 100%;
		top: 0;
		z-index: 10;
		padding: 10px 60px 10px;
		align-items: center;
		margin: 0 auto;
		background-color: var(--colour-white);
		border-bottom: 2px solid rgba(0, 0, 0, 0.3);
		view-transition-name: header;
	}

	.header-img {
		height: 80px;
		width: auto;
		aspect-ratio: 1;
	}

	.desktop-nav {
		a {
			position: relative;
			margin-left: 3rem;
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

	form {
		border: 1px solid #010101;
		max-width: 800px;
		border-radius: 50px;
		margin-right: 1rem;
		height: 40px;
	}

	.search-box {
		input[type='text'] {
			padding: 8px 5px 8px 15px;
			font-size: 1.1rem;
			outline: none;
			box-shadow: none;
		}
	}

	.search-button {
		height: 100%;
		width: auto;
		aspect-ratio: 1;
		border-radius: 99px;
		background-color: var(--colour-black);
		fill: var(--colour-white);
		justify-content: center;
	}
</style>
