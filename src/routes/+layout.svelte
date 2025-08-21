<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { setContext } from 'svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();

	function simplify(obj, path) {
		return Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [key.split(path)[1], value])
		);
	}

	const images = import.meta.glob('$lib/assets/images/**/*.{jpg,jpeg,png,webp,apng}', {
		eager: true,
		import: 'default'
	});

	const videos = import.meta.glob('$lib/assets/videos/**/*.{mp4,webm,mov}', {
		eager: true,
		import: 'default'
	});

	setContext('images', simplify(images, '/assets/images/'));
	setContext('videos', simplify(videos, '/assets/videos/'));
</script>

<Header />
<div class="article-body">
	{@render children()}
</div>
<Footer />

<style>
	.article-body {
		margin: 0 auto;
		flex-grow: 1;
		width: 100%;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
