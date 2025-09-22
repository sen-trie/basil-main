<script>
	import { getContext } from 'svelte';

	const images = getContext('images');
	let isExpanded = $state(false);

	const timelineEvents = [
		{
			date: 'Early March 2025',
			title: 'First Attempts',
			description:
				'Started with no-torch crème brûlée and lava chocolate cake. Was not a bad experience.'
		},
		{
			date: 'Late March 2025',
			title: 'Positive Feedback',
			description:
				'Baked lemon molten cake and a cheesecake for some friends. Turns out, they liked it so I decided to keep at it.'
		},
		{
			date: 'April 2025',
			title: 'Building Skills',
			description:
				"Baked lemon basque cheesecake. To my surprise, the same friends really enjoyed it when I thought it wasn't that good."
		},
		{
			date: 'June 2025',
			title: 'Workplace Sharing',
			description:
				"Became confident enough to bring some over to work. My coworkers were happy with anything that I brought them, it's free food after all."
		},
		{
			date: 'July 2025',
			title: 'Expanding Repertoire',
			description:
				'Fulfilled a streak of requests from friends, family and coworkers. I wanted to expand my repertoire from the usual baked goods.'
		},
		{
			date: 'August 2025',
			title: 'Presentation Focus',
			description:
				'Started practising piping techniques and worked on visual appeal. For subsequent bakes, added emphasis to presentation.'
		},
		{
			date: 'September 2025',
			title: 'International Flavors',
			description:
				'Experimented with exotic flavors and dishes not typically found locally like ube cheesecake and alfajores.'
		},
		{
			date: 'Present',
			title: 'Continuous Learning',
			description:
				'Still experimenting, still learning, occasionally failing. Each bake teaches me something new.'
		}
	];

	const visibleEvents = $derived(isExpanded ? timelineEvents : timelineEvents.slice(0, 4));
</script>

<div class="timeline-container">
	<div class:not-expanded={!isExpanded}>
		{#each visibleEvents as event}
			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-content">
					<div class="timeline-date">{event.date}</div>
					<h3>{event.title}</h3>
					<p>{event.description}</p>
				</div>
			</div>
		{/each}

		{#if !isExpanded}
			<div class="expand-button-container">
				<button class="expand-button" onclick={() => (isExpanded = true)}> Show More </button>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.timeline-container {
		position: relative;
		width: min(800px, 100%);
		margin: 8px auto 16px;

		&::before {
			content: '';
			position: absolute;
			width: 2px;
			background-color: light-dark(var(--light-accent), var(--dark-accent));
			top: 0;
			bottom: 0;
			left: 19px;
		}
	}

	.not-expanded::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 300px;
		z-index: 1;
		background: linear-gradient(
			to bottom,
			color-mix(in srgb, light-dark(#faf9f7, #27221b), transparent 100%) 0%,
			color-mix(in srgb, light-dark(#faf9f7, #27221b), transparent 10%) 70%,
			light-dark(#faf9f7, #27221b) 100%
		);
		pointer-events: none;
	}

	.timeline-item {
		position: relative;
		display: flex;
		align-items: flex-start;
		margin-bottom: 2rem;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.timeline-dot {
		width: 16px;
		height: 16px;
		background-color: light-dark(var(--light-text-strong), var(--dark-text-strong));
		border: 2px solid light-dark(var(--light-accent), var(--dark-accent));
		border-radius: 50%;
		position: relative;
		flex-shrink: 0;
		margin-left: 12px;
		margin-top: 4px;
	}

	.timeline-content {
		margin-left: 32px;

		h3 {
			font-size: 1.3rem;
			margin-bottom: 8px;
		}

		.timeline-date {
			opacity: 0.7;
			margin-bottom: 8px;
		}
	}

	.expand-button-container {
		position: relative;
		bottom: 16px;
		display: flex;
		justify-content: center;
		margin-top: 48px;
		z-index: 2;

		.expand-button {
			background-color: light-dark(var(--dark-accent), var(--dark-accent));
			border: 1px solid light-dark(var(--light-accent), var(--dark-accent));
			color: light-dark(var(--dark-text-strong), var(--dark-text-strong));
			padding: 8px 16px;
			border-radius: 4px;
			cursor: pointer;
			font-size: 0.9rem;
		}
	}

	@media (max-width: 768px) {
		.timeline-content {
			margin-left: 24px;

			.timeline-date {
				font-size: 0.9rem;
			}

			h3 {
				font-size: 1.2rem;
			}
		}
	}
</style>
