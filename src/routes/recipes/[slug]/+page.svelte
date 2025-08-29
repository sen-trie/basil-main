<script>
	let { data } = $props();
	let { content } = data;
	let { title, segments } = JSON.parse(content);

	let factor = $state(1);
	let activeStepIndex = $state(-1);

	const SPACE_UNITS = ['cup', 'tsp', 'tbsp'];
	const processIngredients = (ingValue) => {
		const fIngredients = ingValue.map((arr) => {
			const space = SPACE_UNITS.includes(arr?.[1] ?? '') ? ' ' : '';
			let amt = factor * arr[0];
			return `${amt === 0.5 ? '1/2' : amt}${space}${arr?.[1] ?? ''}`;
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

	const htmlStep = (step, seg) => {
		return `${parseStep(step, seg.ingredients)}`;
	};
</script>

<svelte:body onkeydown={change} />

<div class="body-container">
	<h1>{title}</h1>
	{#each segments as seg, index}
		<h3>{seg.pan}</h3>

		<h2>Ingredients</h2>
		<ul>
			{#each Object.entries(seg.ingredients) as [ingName, value]}
				<li>
					<input type="checkbox" id={ingName} />
					<label for={ingName}>{processIngredients(value)} {ingName}</label>
				</li>
			{/each}
		</ul>
		<hr />
		<h2>Steps</h2>
		<ol>
			{#each seg.steps as step, index}
				<li class:active={activeStepIndex === index}>
					<button onclick={() => (activeStepIndex = activeStepIndex === index ? -1 : index)}>
						{@html htmlStep(step, seg)}
					</button>
				</li>
			{/each}
		</ol>
	{/each}
</div>

<style lang="scss">
	ol li {
		font-size: 18px;
		transition: 0.3s ease;
		border-left: 4px solid transparent;
		padding-left: 8px;

		&.active {
			background-color: #e0f7fa;
			border-color: #007bff;
		}

		button {
			font-size: inherit;
			text-decoration: inherit;
		}
	}

	ul {
		list-style-type: none;

		input[type='checkbox']:checked + label {
			text-decoration: line-through;
		}
	}

	ol {
		padding-left: 0;
		list-style: inside decimal;
	}
</style>
