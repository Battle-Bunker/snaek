<script lang="ts">
	interface Props {
		food?: boolean;
		hazard?: boolean;
	}

	let { food = false, hazard = true }: Props = $props();
</script>

<div class={['square', hazard && 'hazard']}>
	{#if food}
		<div class="food"></div>
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5em;
		height: 5em;
		border-radius: 1em;
		background: #555;
		margin: 2px;
	}

	.food {
		width: 3em;
		height: 3em;
		border-radius: 100%;
		background: #fd6b6b;
		box-shadow: 4px 4px #444;
	}

	.hazard {
		background: #970202;
	}
</style>
