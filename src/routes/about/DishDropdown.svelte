<script>
	let dishDates = $state([]);
	let isDropdownOpen = $state(false);

	function formatDate(dateString) {
		const [day, month, year] = dateString.replaceAll('"', "").split('/');
		const fullYear = year.length === 2 ? `20${year}` : year;

		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		return `${parseInt(day)} ${months[parseInt(month) - 1]} ${fullYear}`;
	}

	async function loadSuccessfulAttempts() {
		try {
			const response = await fetch('/dishes.csv');
			const csvText = await response.text();
			const lines = csvText.trim().split('\n');

			dishDates = lines
				.slice(1)
				.reverse()
				.map((line) => {
					const [dish, date] = line.split(',').map((item) => item.trim());
					return { dish, date: formatDate(date) };
				});
		} catch (error) {
			console.error('Failed to load successful attempts:', error);
		}
	}

	$effect(() => {
		loadSuccessfulAttempts();
	});
</script>

<div class="dish-dropdown">
	<button
		class="dropdown-toggle"
		onclick={() => {
			isDropdownOpen = !isDropdownOpen;
		}}
	>
		<span>Successful Attempts</span>
		<span class="arrow" class:open={isDropdownOpen}>▼</span>
	</button>

	{#if isDropdownOpen}
		<div class="dropdown-content">
			<ol type="1">
				{#each dishDates as attempt, index}
					<li>
						<span class="dish">{index + 1}. {attempt.dish}</span>
						<span class="date">{attempt.date}</span>
					</li>
				{/each}
			</ol>
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem 1.5rem;
		background-color: light-dark(var(--light-bg), var(--dark-bg));
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		font-size: 1.3rem;
		color: inherit;
		transition: all 0.2s ease;

		.arrow {
			transition: transform 0.3s ease;
			font-size: 0.9rem;

			&.open {
				transform: rotate(-90deg);
			}
		}
	}

	.dropdown-content {
		margin: 16px 12px;
		font-size: 1.2rem;
		overflow: hidden;

		background-color: light-dark(var(--light-bg), var(--dark-bg));
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		animation: slideDown 0.2s ease;

		ol {
			max-height: 60dvh;
			padding: 8px 24px;
			overflow-y: auto;

			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 12px 8px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.3);

				&:last-child {
					border-bottom: none;
				}

				.date {
					opacity: 0.7;
					font-size: 1rem;
				}
			}
		}
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.dropdown-toggle {
			font-size: 1.1rem;
			padding: 0.8rem 1.2rem;
		}

		.dropdown-content {
			margin: 12px 0;
			padding: 0 4px;
			font-size: 1rem;

			ol {
				padding: 4px 4px;

				li {
					flex-direction: column;
					align-items: flex-start;
					margin-right: 4px;
					padding: 8px 8px;
					gap: 4px;

					.date {
						font-size: 0.9rem;
						margin-left: 0;
					}
				}
			}
		}
	}
</style>
