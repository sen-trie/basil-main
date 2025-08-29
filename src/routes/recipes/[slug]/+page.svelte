<script>
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
	import { getContext } from 'svelte';

	let { data } = $props();
	let { slug, category, content } = data;
	let { pan, referenceText, referenceLink, cuisine, segments } = JSON.parse(content);

	let factor = $state(1);
	let activeStepIndex = $state(-1);
	let cookMode = $state(false);

	const images = getContext('images');

	const fraction = (amt) => {
		if (amt === 0.5) return '½';
		if (amt === 0.25) return '¼';
		return amt;
	};

	const SPACE_UNITS = ['cup', 'tsp', 'tbsp'];
	const processIngredients = (ingValue) => {
		const fIngredients = ingValue.map((arr) => {
			const space = SPACE_UNITS.includes(arr?.[1] ?? '') ? ' ' : '';
			let amt = factor * arr[0];
			return `${fraction(amt)}${space}${arr?.[1] ?? ''}`;
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
			const fv = processIngredients(ing[ingredientName]);
			return `<u>${fv} ${ingredientName.toLowerCase()}</u>`;
		});

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
</script>

<div class="body-container">
	<div class="recipe-container">
		<h1>{slug.replaceAll('_', ' ')}</h1>
		<div class="recipe-header flexbox">
			<div class="recipe-header-text">
				<h3>Yield: {parseServing(pan)}</h3>
				<h3>Category: {category}</h3>
				<h3>Cuisine: {cuisine}</h3>
				<a href={referenceLink} target="_blank">
					<h3>
						Reference: {referenceText}1
					</h3>
				</a>
			</div>
			<img alt="recipe" />
		</div>
		{#each segments as seg, index}
			<h2>Ingredients</h2>
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
			<ul>
				{#each Object.entries(seg.ingredients) as [ingName, value]}
					<li>
						<input type="checkbox" id={ingName} />
						<label for={ingName}>{processIngredients(value)} {ingName}</label>
					</li>
				{/each}
			</ul>
			<ToggleSwitch />
			<hr />
			<h2>Steps</h2>
			<ol>
				{#each seg.steps as step, index}
					<li class:active={activeStepIndex === index}>
						<button onclick={() => (activeStepIndex = activeStepIndex === index ? -1 : index)}>
							{@html htmlStep(step, seg, index)}
						</button>
					</li>
				{/each}
			</ol>
		{/each}
	</div>
</div>

<style lang="scss">
	$text-size: 20px;

	.body-container {
		padding: 40px 8px;
	}

	.recipe-container {
		background-color: var(--colour-white);
		border: 4px groove var(--colour-white);
		padding: 24px 32px;

		h1 {
			color: var(--colour-dark-green);
			padding-bottom: 4px;
			border-bottom: 2px dotted var(--colour-dark-green);
			margin-bottom: 1rem;
		}

		h2 {
			margin: 8px 0 4px;
		}

		.recipe-header {
			justify-content: space-between;
			height: 140px;

			.recipe-header-text {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-self: flex-start;
				gap: 8px;

				* {
					width: fit-content;
				}
			}

			img {
				height: 100%;
				width: auto;
				aspect-ratio: 1;
				background-color: aqua;
			}
		}

		.serving-factor {
			font-size: 18px;
			margin-bottom: 8px;

			button {
				height: 2rem;
				width: fit-content;
				padding: 0 4px;
				margin: 0 4px;
				font-size: inherit;
				color: var(--colour-dim);
				border: 2px solid var(--colour-dim);

				&:first-of-type {
					margin-left: 8px;
				}

				&.active-factor {
					background-color: var(--colour-dim);
					color: var(--colour-white);
				}
			}
		}

		ul {
			list-style-type: none;

			li {
				margin-top: 4px;

				input[type='checkbox'] {
					width: 1rem;
					height: 1rem;
					translate: 0 1px;
					cursor: pointer;
				}

				input[type='checkbox']:checked + label {
					text-decoration: line-through;
				}

				label {
					font-size: $text-size;
					margin-left: 4px;
				}
			}
		}

		ol {
			padding-left: 0;
			list-style: number;
			margin-left: 24px;
			padding-right: 24px;
		}

		ol li {
			font-size: $text-size;
			transition: 0.3s ease;
			padding: 2px 4px;
			display: list-item;

			&::marker {
				transition: 0.3s ease;
			}

			&.active {
				&::marker {
					color: var(--colour-dark-green);
				}

				background-color: rgba(157, 194, 117, 0.5);
			}

			button {
				display: block;
				text-align: left;
				border: none;
				font-size: inherit;
			}
		}
	}
</style>
