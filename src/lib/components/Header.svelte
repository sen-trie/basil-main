<script>
	import { page } from '$app/stores';
	let recipeVal = $state('');
</script>

<header class="flexbox">
	<a href="/">Basil Club</a>
	<div class="flexbox desktop-nav">
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/recipes" class:active={$page.url.pathname.startsWith('/recipes')}>Recipes</a>
		<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		<a href="/cafe" class:active={$page.url.pathname.startsWith('/cafe')}>Cafe</a>
	</div>
	<div class="search-box">
		<input type="text" bind:value={recipeVal} placeholder="Search recipes" />
		<button>Search</button>
	</div>
</header>

<style>
	header {
		position: sticky;
		justify-content: space-between;
		width: 100%;
		top: 0;
		z-index: 10;
		padding: 35px 40px 35px;
		align-items: center;
		margin: 0 auto;
		background-color: var(--colour-white);
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
		view-transition-name: header;
	}

	.desktop-nav a {
		position: relative;
		margin-left: 3rem;
		font-size: 1.4rem;
		padding-bottom: 4px;
	}

	.desktop-nav a.active::before {
		content: '';
		position: absolute;
		width: 100%;
		bottom: -3px;
		border-bottom: 3px solid transparent;
		transition: border-color 0.2s;
		border-color: var(--colour-black);
		view-transition-name: active-page;
	}
</style>
