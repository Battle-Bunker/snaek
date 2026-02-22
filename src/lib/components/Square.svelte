<script lang="ts">
	interface Props {
		contents?: 'empty' | 'food' | 'hazard';
	}

	let { contents = 'empty' }: Props = $props();
</script>

<div class="square"></div>

<style>
	.square {
		width: 5em;
		height: 5em;
		border-radius: 1em;
		background: #555;
		margin: 2px;
	}
</style>
