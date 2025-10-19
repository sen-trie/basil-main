<script>
	import { dev } from '$app/environment';
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
	import { getContext } from 'svelte';

	let { data } = $props();
	let { slug, category, content } = data;
	let { pan, referenceText, referenceLink, cuisine, segments, altTitle = '' } = JSON.parse(content);

	let factor = $state(1);
	let activeStepIndex = $state(-1);
	let activeSegIndex = $state(-1);
	let cookMode = $state(false);

	const images = getContext('images');

	const fraction = (amt) => {
		const map = [
			{ val: 0.25, sym: '¼' },
			{ val: 0.5, sym: '½' },
			{ val: 0.75, sym: '¾' },
			{ val: 1 / 3, sym: '⅓' },
			{ val: 2 / 3, sym: '⅔' },
			{ val: 1 / 8, sym: '⅛' },
			{ val: 3 / 8, sym: '⅜' },
			{ val: 5 / 8, sym: '⅝' },
			{ val: 7 / 8, sym: '⅞' }
		];

		const whole = Math.trunc(amt);
		const frac = amt - whole;

		for (const { val, sym } of map) {
			if (Math.abs(frac - val) < 1e-6) {
				return whole ? `${whole}${sym}` : sym;
			}
		}

		return whole && frac ? `${amt}` : String(amt);
	};

	const SPACE_UNITS = ['cup', 'tsp', 'tbsp', 'cups'];
	const processIngredients = (ingValue) => {
		const fIngredients = ingValue.map((arr) => {
			const space = SPACE_UNITS.includes(arr?.[1] ?? '') ? ' ' : '';
			let amt = factor * arr[0];
			const displayAmt = amt > 10 ? amt.toString() : fraction(amt);

			return `${displayAmt}${space}${arr?.[1] ?? ''}`;
		});

		const altValue = fIngredients?.[1] ? `(${fIngredients?.[1]})` : '';

		return `${fIngredients?.[0] ?? ''} ${altValue}`;
	};

	const parseStep = (step, ing) => {
		let processedStep = step.replace(/\[\'temp\'\]\{(\d+)\}/g, (match, celsiusStr) => {
			const celsius = parseInt(celsiusStr, 10);
			const fahrenheit = Math.round((celsius * 9) / 5 + 32);
			return `${celsius}°C (${fahrenheit}°F)`;
		});

		processedStep = processedStep.replace(/\[\'ing\'\]\{([^}]+)\}/g, (match, ingredientName) => {
			if (ing[ingredientName]) {
				const fv = processIngredients(ing[ingredientName]);
				return `<u>${fv} ${ingredientName.toLowerCase()}</u>`;
			}

			console.warn(`Missing ingredient bind: ${ingredientName}`);
			return `<u>${ingredientName.toLowerCase()}</u>`;
		});

		processedStep = processedStep.replace(
			/\[\'fac\'\]\{(\d+)\}(?:\{([^}]+)\})?(?:\[([^\]]+)\])?/g,
			(match, factorVal, operation, ingredientText) => {
				let result = factorVal * factor;

				// Handle operations like {-1}
				if (operation !== undefined) {
					if (/^[+-]?\d+$/.test(operation)) {
						result += Number(operation);
					} else {
						result = `${result}${operation}`;
					}
				}

				// Only wrap with <u> if there's an ingredient text in []
				if (ingredientText !== undefined) {
					return `<u>${result} ${ingredientText.toLowerCase()}</u>`;
				}

				return result;
			}
		);

		return processedStep;
	};

	const htmlStep = (step, seg, index) => {
		return `${parseStep(step, seg.ingredients)}`;
	};

	const parseServing = (serving) => {
		return serving.replace(/\[\'fac\'\]\{([^}]+)\}/g, (match, servingNumber) => {
			return `${servingNumber * factor}`;
		});
	};

	const nonOptionalSegment = segments.filter((seg) => {
		return seg.optional !== true;
	});

	const getSegmentPart = (seg, segIndex) => {
		if (seg.optional === true) {
			return `Optional: ${seg.title}`;
		} else if (nonOptionalSegment.length === 1) {
			return `${seg.title}`;
		}

		return `Part ${segIndex + 1} / ${nonOptionalSegment.length}: ${seg.title}`;
	};
</script>

{#snippet scaleFactor()}
	<span class="serving-factor flexbox">
		Scale:
		<button
			class:active-factor={factor === 1 / 2}
			onclick={() => {
				factor = 1 / 2;
			}}>½×</button
		>
		<button
			class:active-factor={factor === 1}
			onclick={() => {
				factor = 1;
			}}>1×</button
		>
		<button
			class:active-factor={factor === 2}
			onclick={() => {
				factor = 2;
			}}>2×</button
		>
		<button
			class:active-factor={factor === 3}
			onclick={() => {
				factor = 3;
			}}>3×</button
		>
	</span>
{/snippet}

<div class="body-container">
	<div class="link-container">
		<a href="/">Home </a> ·
		<a href="/recipes">Recipes </a> ·
		<a href="/category/{category}">{category}</a>
	</div>
	<div class="recipe-container">
		<h1>{altTitle !== '' ? altTitle : slug.replaceAll('_', ' ')}</h1>
		<div class="recipe-header flexbox">
			<div class="recipe-header-text">
				<h3>Yield: {parseServing(pan)}</h3>
				<h3>Category: <a href="/category/{category}"><u>{category}</u></a></h3>
				<h3>Cuisine: {cuisine}</h3>
				{#if referenceLink && referenceLink !== ''}
					<a href={referenceLink} target="_blank">
						<h3>
							Reference: <u>{referenceText}</u>
						</h3>
					</a>
				{:else}
					<h3>Reference: Original Recipe</h3>
				{/if}
			</div>
			<img src={images[`recipes/${slug}.webp`]} alt="recipe" loading="lazy" />
		</div>
		{#if segments.length !== 1}
			<div class="multi-segment">
				{@render scaleFactor()}
				<ToggleSwitch />
			</div>
		{/if}
		{#each segments as seg, segIndex}
			{#if seg.title && seg.title !== ''}
				<h2 class="segment-title">{getSegmentPart(seg, segIndex)}</h2>
			{/if}
			<h2>Ingredients</h2>
			{#if segments.length === 1}
				{@render scaleFactor()}
			{/if}
			<ul>
				{#each Object.entries(seg.ingredients) as [ingName, value]}
					<li class="flexbox">
						<input type="checkbox" id="{segIndex}-{ingName}" />
						<label for="{segIndex}-{ingName}"
							>{processIngredients(value)}
							{ingName}{value[0] && value[0][2] ? `, ${value[0][2]}` : ''}</label
						>
					</li>
				{/each}
			</ul>
			{#if segments.length === 1}
				<ToggleSwitch />
			{/if}
			<hr />
			<h2 class="step-counter">
				Steps <span class="current-step"
					>{activeStepIndex === -1 || activeSegIndex !== segIndex
						? ''
						: `(Currently: ${activeStepIndex + 1}/${seg.steps.length})`}</span
				>
			</h2>
			<ol>
				{#each seg.steps as step, stepIndex}
					<li class:active={activeStepIndex === stepIndex && activeSegIndex === segIndex}>
						<button
							onclick={() => {
								if (activeSegIndex === segIndex) {
									if (activeStepIndex === stepIndex) {
										activeStepIndex = -1;
										activeSegIndex = -1;
									} else {
										activeStepIndex = stepIndex;
									}
								} else {
									activeStepIndex = stepIndex;
									activeSegIndex = segIndex;
								}
							}}
						>
							{@html htmlStep(step, seg, stepIndex)}
						</button>
					</li>
				{/each}
			</ol>
		{/each}
	</div>
</div>

<style lang="scss">
	$text-size: 20px;
	$text-size-m: 18px;
	$text-size-sm: 16px;

	.body-container {
		padding: 40px 8px;
	}

	.link-container {
		margin-bottom: 24px;
	}

	.recipe-container {
		background-color: light-dark(var(--light-bg), var(--dark-bg));
		border: 4px groove light-dark(var(--light-bg), var(--dark-bg));
		padding: 24px 32px;

		h1 {
			color: light-dark(var(--light-green-deep), var(--dark-green-deep));
			padding-bottom: 4px;
			border-bottom: 2px dotted light-dark(var(--light-green-deep), var(--dark-green-deep));
			margin-bottom: 12px;
		}

		h2 {
			border-top: 2px dotted light-dark(var(--light-green-deep), var(--dark-green-deep));
			margin: 12px 0 16px;
			padding-top: 20px;

			.current-step {
				display: inline-block;
				font-size: 1.2rem;
				margin-left: 4px;
				opacity: 0.5;
				translate: 0 -1px;
			}
		}

		.recipe-header {
			justify-content: space-between;
			height: 140px;

			.recipe-header-text {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-self: flex-start;
				padding: 4px 0;

				* {
					width: fit-content;
				}
			}

			img {
				height: 100%;
				width: auto;
				aspect-ratio: 1;
				object-fit: cover;
			}
		}

		.multi-segment {
			border-top: 2px dotted light-dark(var(--light-green-deep), var(--dark-green-deep));
			margin: 12px 0 -8px;
			padding-top: 20px;

			.serving-factor {
				margin: 8px 0;
			}
		}

		.serving-factor {
			font-size: 18px;
			margin: 8px 0 16px;

			button {
				height: 2rem;
				width: fit-content;
				padding: 0 4px;
				margin: 0 4px;
				font-size: inherit;
				color: light-dark(var(--colour-dim), var(--colour-bright));
				border: 2px solid light-dark(var(--colour-dim), var(--colour-bright));

				&:first-of-type {
					margin-left: 8px;
				}

				&.active-factor {
					background-color: light-dark(var(--colour-dim), var(--colour-bright));
					color: light-dark(var(--light-bg), var(--dark-bg));
				}
			}
		}

		ul {
			list-style-type: none;
			margin-bottom: 8px;

			li {
				align-items: center;
				position: relative;
				margin-top: 12px;

				input[type='checkbox'] {
					width: 20px;
					height: 20px;
					translate: 0 1px;
					cursor: pointer;
					accent-color: light-dark(var(--light-green-deep), var(--dark-green-deep));
					flex-shrink: 0;
					align-items: flex-start;
				}

				input[type='checkbox']:checked + label {
					text-decoration: line-through light-dark(var(--light-green-deep), var(--dark-green-deep));
				}

				label {
					align-items: center;
					position: relative;
					font-size: $text-size;
					margin-left: 8px;
				}
			}
		}

		ol {
			padding-left: 0;
			list-style: number;
			margin-left: 24px;
			padding-right: 24px;

			li {
				font-size: $text-size;
				transition:
					0.3s background-color ease,
					0.3s padding ease;
				padding: 4px 8px;
				margin-top: 4px;
				display: list-item;

				&.active {
					background-color: rgba(157, 194, 117, 0.4);
					border-left: 2px solid light-dark(var(--light-green-deep), var(--dark-green-deep));
				}

				button {
					display: block;
					text-align: left;
					border: none;
					font-size: inherit;
				}
			}
		}
	}

	@media (max-width: 768px) {
		.body-container {
			padding: 20px 8px;
		}

		.recipe-container {
			padding: 16px 16px;

			.recipe-header {
				flex-direction: column-reverse;
				height: fit-content;

				img {
					height: unset;
					width: 50%;
					margin: 8px 0;
				}
			}

			ul li {
				label {
					width: 100%;
					font-size: $text-size-sm;
				}
			}

			ol {
				padding-left: 8px;
				padding-right: 0;

				li {
					font-size: $text-size-m;
					padding: 4px 4px;
				}
			}
		}
	}
</style>
