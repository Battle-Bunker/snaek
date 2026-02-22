import type Snake from '$lib/types/Snake';
import type Coordinate from '$lib/types/Coordinate';

export default interface GameState {
	turn: number;
	width: number;
	height: number;
	snakes: Snake[];
	food: Coordinate[];
	finished: boolean;
	winner: string | null;
}
