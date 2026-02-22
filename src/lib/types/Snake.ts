import type Coordinate from '$lib/types/Coordinate';

export default interface Snake {
	id: string;
	name: string;
	body: Coordinate[];
	health: number;
	alive: boolean;
	color: string;
	length: number;
	is_bot: boolean;
	kills: number;
}
