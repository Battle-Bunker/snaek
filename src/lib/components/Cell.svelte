<script lang="ts">
	interface Props {
		food?: boolean;
		hazard?: boolean;
	}

	let { food = false, hazard = false }: Props = $props();
</script>

<div class="square" class:hazard>
	{#if food}
		<div class="food"></div>
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4rem;
		height: 4rem;
		border-radius: 1rem;
		background: #555;
		margin: 0.1rem;
	}

	.food {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 100%;
		background: #fd6b6b;
		box-shadow: 4px 4px #444a;
	}

	.hazard {
		background: #5b0606;
	}
</style>
