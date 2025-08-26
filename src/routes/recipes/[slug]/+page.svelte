<script>
	let { data } = $props();
	let { content } = data;
	let { title, segments } = JSON.parse(content);

	let factor = $state(1);

	const SPACE_UNITS = ['cup', 'tsp', 'tbsp'];

	const processIngredients = (ing) => {
		const fIngredients = ing.map((arr) => {
			const space = SPACE_UNITS.includes(arr?.[1] ?? '') ? ' ' : '';
			let amt = factor * arr[0];
			if (amt == 0.5) amt = '1/2';
			return `${amt}${space}${arr?.[1] ?? ''}`;
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

	const htmlStep = (step, stepIndex, seg) => {
		return `${stepIndex + 1}. ${parseStep(step, seg.ingredients)}`;
	};
</script>

<svelte:body onkeydown={change} />

<h1>{title}</h1>
{#each segments as seg, index}
	<h3>{seg.pan}</h3>

	<h2>Ingredients</h2>
	<ul>
		{#each Object.entries(seg.ingredients) as [ing, value]}
			<li>{processIngredients(value)} {ing}</li>
		{/each}
	</ul>
	<hr />
	<h2>Steps</h2>
	<ol>
		{#each seg.steps as step, stepIndex}
			<li>{@html htmlStep(step, stepIndex, seg)}</li>
		{/each}
	</ol>
{/each}
