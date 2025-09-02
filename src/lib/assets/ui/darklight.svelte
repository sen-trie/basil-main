<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let darkMode = $state(false);

	const toggleDark = () => {
		if (!browser) return;

		const html = document.documentElement;
		if (html.classList.contains('dark')) {
			html.classList.remove('dark');
			html.classList.add('light');
			localStorage.setItem('theme', 'light');
		} else if (html.classList.contains('light')) {
			html.classList.remove('light');
			html.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			html.classList.add(prefersDark ? 'dark' : 'light');
			localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
		}

		darkMode = html.classList.contains('dark');
	};

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const html = document.documentElement;

		if (savedTheme) {
			html.classList.add(savedTheme);
			darkMode = savedTheme === 'dark';
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			html.classList.add(prefersDark ? 'dark' : 'light');
			darkMode = prefersDark === 'dark';
		}
	});
</script>

<button
	class="theme-toggle"
	id="theme-toggle"
	title="Toggles light & dark"
	aria-label="Theme toggle"
	aria-live="polite"
	onclick={toggleDark}
>
	{#if darkMode}
		<svg
			class="svg-moon"
			viewBox="0 0 24 24"
			stroke-width="0"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
		</svg>
	{:else}
		<svg
			class="svg-sun"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path
				d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
			/>
		</svg>
	{/if}
</button>

<style lang="scss">
	.theme-toggle {
		-webkit-tap-highlight-color: transparent;
		outline: none;

		&:focus {
			outline: none;
			box-shadow: none;
		}
	}

	svg {
		width: 24px;
		height: 24px;
		fill: light-dark(var(--light-text-strong), var(--dark-text-strong));
		stroke: light-dark(var(--light-text-strong), var(--dark-text-strong));
		translate: 0 2px;
		margin-right: 12px;
	}
</style>
