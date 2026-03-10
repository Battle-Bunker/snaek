<script lang="ts">
	import type { Coordinate } from '$lib/types/Coordinate';
	import type { NiceGrid } from '$lib/types/NiceGrid';

	import convertToGrid from '$lib/util/convertToGrid';
	import Cell from '$lib/components/Cell.svelte';

	interface Props {
		width: number;
		height: number;
		food: Coordinate[];
		hazards: Coordinate[];
	}

	let { width, height, food, hazards }: Props = $props();

	let grid: NiceGrid = $derived(convertToGrid(width, height, food, hazards));
</script>

<div class="grid">
	{#each grid as row (row)}
		<div class="row">
			{#each row as cell (cell)}
				<Cell {...cell}></Cell>
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
	}
</style>
