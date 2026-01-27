<script lang="ts">
	interface Props {
		content?: 'empty' | 'food' | 'hazard';
	}

	let { content = 'empty' }: Props = $props();
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
