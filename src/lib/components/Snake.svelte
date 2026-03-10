<script lang="ts">
	import type { Snake } from '$lib/types/Snake';
	import type { Coordinate } from '$lib/types/Coordinate';

	interface Props {
		snake: Snake;
	}

	let { snake }: Props = $props();

	function getDir(from: Coordinate, to: Coordinate) {
		if (!from || !to) return null;
		const dx = to.x - from.x;
		const dy = to.y - from.y;
		if (dx === 1) return 'right';
		if (dx === -1) return 'left';
		if (dy === 1) return 'down';
		if (dy === -1) return 'up';
		return null;
	}

	function getBorderRadius(
		prev: Coordinate | null,
		curr: Coordinate,
		next: Coordinate | null
	): string {
		const R = '1.8rem';
		const S = '0rem';
		const E = '0.3rem'; // end rounding

		// Head (no prev) — round the two corners on the far end from next
		if (!prev && next) {
			const outDir = getDir(curr, next);
			// Round the opposite end (away from body)
			if (outDir === 'right') return `${E} ${S} ${S} ${E}`; // tl bl rounded
			if (outDir === 'left') return `${S} ${E} ${E} ${S}`; // tr br rounded
			if (outDir === 'down') return `${E} ${E} ${S} ${S}`; // tl tr rounded
			if (outDir === 'up') return `${S} ${S} ${E} ${E}`; // bl br rounded
		}

		// Tail (no next) — round the two corners on the far end from prev
		if (!next && prev) {
			const inDir = getDir(prev, curr);
			// Round the opposite end (away from body)
			if (inDir === 'right') return `${S} ${E} ${E} ${S}`; // tr br rounded
			if (inDir === 'left') return `${E} ${S} ${S} ${E}`; // tl bl rounded
			if (inDir === 'down') return `${S} ${S} ${E} ${E}`; // bl br rounded
			if (inDir === 'up') return `${E} ${E} ${S} ${S}`; // tl tr rounded
		}

		// Single segment snake
		if (!prev && !next) return E;

		const inDir = getDir(prev!, curr);
		const outDir = getDir(curr, next!);

		if (inDir === outDir) return `${S} ${S} ${S} ${S}`;

		let tl = S,
			tr = S,
			br = S,
			bl = S;

		if (inDir === 'right' && outDir === 'down') {
			tr = R;
		}
		if (inDir === 'right' && outDir === 'up') {
			br = R;
		}
		if (inDir === 'left' && outDir === 'down') {
			tl = R;
		}
		if (inDir === 'left' && outDir === 'up') {
			bl = R;
		}
		if (inDir === 'down' && outDir === 'right') {
			tl = R;
		}
		if (inDir === 'down' && outDir === 'left') {
			tr = R;
		}
		if (inDir === 'up' && outDir === 'right') {
			bl = R;
		}
		if (inDir === 'up' && outDir === 'left') {
			br = R;
		}

		return `${tl} ${tr} ${br} ${bl}`;
	}

	function getHeadRotation(head: Coordinate, next: Coordinate | null): string {
		if (!next) return '0deg';
		const dir = getDir(next, head);
		if (dir === 'right') return '0deg';
		if (dir === 'left') return '180deg';
		if (dir === 'down') return '90deg';
		if (dir === 'up') return '-90deg';
		return '0deg';
	}
</script>

{#each snake.body as segment, i (segment)}
	{@const prev = snake.body[i - 1] ?? null}
	{@const next = snake.body[i + 1] ?? null}
	{@const isHead = i === 0}
	{@const borderRadius = getBorderRadius(prev, segment, next)}

	<div
		class="segment"
		class:head={isHead}
		style:left="{segment.x * 4}rem"
		style:top="{segment.y * 4}rem"
		style:background={snake.alive ? snake.color : '#888'}
		style:border-radius={borderRadius}
		style:--rotation={isHead ? getHeadRotation(segment, next) : undefined}
	>
		{#if isHead}
			<div class="head-label">H</div>
		{/if}
	</div>
{/each}

<style>
	.segment {
		position: absolute;
		width: 4rem;
		height: 4rem;
	}

	.head {
		z-index: 10;
	}

	.head-label {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0.6rem 0.5rem 0.6rem 1.4rem;
		transform: rotate(var(--rotation, 0deg));
		pointer-events: none;
	}
</style>
