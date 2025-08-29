<script>
	let waveActive = $state(false);
	let wakeLock = null;

	$effect(async () => {
		let active = true;

		(async () => {
			if (waveActive) {
				try {
					wakeLock = await navigator.wakeLock.request('screen');
				} catch (err) {
					console.error(err);
				}
			} else {
				if (wakeLock) {
					await wakeLock.release();
					wakeLock = null;
				}
			}
		})();

		return async () => {
			active = false;
			if (wakeLock) {
				await wakeLock.release();
				wakeLock = null;
			}
		};
	});
</script>

<div class="toggle-switch">
	<input class="toggle-input" id="toggle" type="checkbox" bind:checked={waveActive} />
	<label class="toggle-label" for="toggle"></label>
	<label class="flexbox toggle-text" for="toggle">
		<span>Cook Mode</span>
		<span class="small-span"><i>(Prevent screen from going dark)</i></span>
	</label>
</div>

<style lang="scss">
	.toggle-switch {
		position: relative;
		display: inline-block;
		width: fit-content;
		margin: 8px 0;
		height: 24px;

		.toggle-label {
			position: absolute;
			top: 0;
			left: 0;
			width: 40px;
			height: 24px;
			background-color: var(--colour-dull-black);
			border-radius: 34px;
			cursor: pointer;
			transition: background-color 0.3s;

			&::before {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				border-radius: 50%;
				top: 2px;
				left: 2px;
				background-color: #fff;
				transition: transform 0.3s;
			}
		}

		.toggle-input {
			display: none;
		}

		.toggle-input:checked + .toggle-label {
			background-color: var(--colour-green);

			&::before {
				transform: translateX(16px);
			}
		}

		.toggle-text {
			height: 100%;
			margin-left: 48px;
			user-select: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			cursor: pointer;

			.small-span {
				margin-left: 4px;
				opacity: 0.5;
			}
		}
	}
</style>
