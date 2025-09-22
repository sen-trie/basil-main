<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import Darklight from '$lib/assets/ui/darklight.svelte';
	import Burger from '$lib/assets/ui/burger.svelte';

	let drawerOpen = $state(false);

	const images = getContext('images');
</script>

<header>
	<div class="flexbox body-container header-wrapper">
		<a class="header-img-container flexbox" href="/">
			<img class="header-img" src={images['logo.webp']} alt="logo" />
		</a>

		<div class="flexbox desktop-nav">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/recipes" class:active={$page.url.pathname.startsWith('/recipes')}>Recipes</a>
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		</div>

		<div class="header-actions flexbox">
			<Darklight />
			<a class="cafe-button" href="https://explore.basilclub.cafe">Visit cafe</a>
		</div>

		<div class="mobile-action flexbox">
			<Darklight />
			<button class="burger-button" onclick={() => (drawerOpen = !drawerOpen)}>
				<Burger />
			</button>
		</div>
	</div>
</header>

{#if drawerOpen}
	<nav transition:fly={{ y: -250, duration: 500, opacity: 1 }} class="mobile-nav flexbox">
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/recipes" class:active={$page.url.pathname.startsWith('/recipes')}>Recipes</a>
		<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		<a class="cafe-button" href="https://explore.basilclub.cafe">Visit cafe</a>
	</nav>
{/if}

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: light-dark(var(--light-bg), var(--dark-bg));
		border-bottom: 2px solid rgba(0, 0, 0, 0.3);
		view-transition-name: header;
	}

	.header-wrapper {
		height: 80px;
		padding: 8px 32px;
		align-items: center;
		justify-content: space-between;
	}

	.header-img-container,
	.header-img {
		height: 100%;
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
			color: light-dark(var(--light-green-deep), var(--dark-green-deep));
		}

		a.active::before {
			content: '';
			position: absolute;
			width: 100%;
			bottom: -3px;
			border-bottom: 3px solid transparent;
			border-color: light-dark(var(--light-green-deep), var(--dark-green-deep));
			view-transition-name: active-page;
		}
	}

	.cafe-button {
		background-color: light-dark(var(--light-text-strong), var(--dark-text-strong));
		color: light-dark(var(--light-bg), var(--dark-bg));
		padding: 8px 32px;
		font-size: 1.2rem;
		font-weight: 700;
		border-radius: 8px;
	}

	.mobile-action,
	.mobile-nav {
		display: none;
	}

	.header-actions {
		height: 100%;
		position: relative;
		gap: 8px;
	}

	.mobile-nav {
		position: fixed;
		z-index: 8;
		top: 82px;
		width: 100%;
		background-color: light-dark(var(--light-bg), var(--dark-bg));
		border-bottom: 2px solid rgba(0, 0, 0, 0.3);
		padding: 12px 20px 8px;
		flex-direction: column;
		text-align: left;

		a {
			position: relative;
			width: 100%;
			font-size: 1.4rem;
			transition: 0.2s ease;
			padding-bottom: 4px;
			margin-bottom: 12px;
		}

		a.active {
			color: light-dark(var(--light-green-deep), var(--dark-green-deep));
		}

		a.active::before {
			content: '';
			position: absolute;
			bottom: 0;
			width: 100%;
			border-bottom: 3px solid transparent;
			border-color: light-dark(var(--light-green-deep), var(--dark-green-deep));
			view-transition-name: active-page;
		}

		.cafe-button {
			align-self: flex-end;
			width: fit-content;
			padding: 4px 24px;
			margin-bottom: 4px;
		}
	}

	@media (max-width: 768px) {
		.desktop-nav,
		.header-wrapper .header-actions {
			display: none;
		}

		.header-img {
			height: 60px;
		}

		.header-wrapper {
			padding: 8px 16px;
		}

		.mobile-action {
			display: flex;
			position: relative;

			.burger-button {
				color: light-dark(var(--light-text-strong), var(--dark-text-strong));
				translate: 0 2px;
			}
		}

		.mobile-nav {
			display: flex;
		}
	}
</style>
