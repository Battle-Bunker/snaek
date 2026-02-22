import type { Coordinate } from '$lib/types/Coordinate';
import type { NiceGrid } from '$lib/types/NiceGrid';

export default function (
	width: number,
	height: number,
	food: Coordinate[],
	hazards: Coordinate[]
): NiceGrid {
	const grid: NiceGrid = Array.from({ length: height }, () =>
		Array.from({ length: width }, () => ({ food: false, hazard: false }))
	);

	food.forEach(({ x, y }) => {
		grid[y][x].food = true;
	});

	hazards.forEach(({ x, y }) => {
		grid[y][x].hazard = true;
	});

	return grid;
}
