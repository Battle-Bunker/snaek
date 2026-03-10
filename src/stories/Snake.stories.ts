import type { Meta, StoryObj } from '@storybook/sveltekit';

import Snake from '$lib/components/Snake.svelte';

const meta = {
	component: Snake
} satisfies Meta<typeof Snake>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseSnake = {
	id: '1',
	name: 'Test Snake',
	health: 100,
	alive: true,
	color: '#ff0000',
	length: 3,
	is_bot: false,
	kills: 0
};

export const Simple: Story = {
	args: {
		snake: {
			...baseSnake,
			body: [
				{ x: 2, y: 2 },
				{ x: 2, y: 3 },
				{ x: 2, y: 4 }
			]
		}
	}
};

export const Long: Story = {
	args: {
		snake: {
			...baseSnake,
			id: '2',
			name: 'Long Snake',
			length: 8,
			body: [
				{ x: 5, y: 0 },
				{ x: 5, y: 1 },
				{ x: 5, y: 2 },
				{ x: 5, y: 3 },
				{ x: 5, y: 4 },
				{ x: 5, y: 5 },
				{ x: 5, y: 6 },
				{ x: 5, y: 7 }
			]
		}
	}
};

export const Curved: Story = {
	args: {
		snake: {
			...baseSnake,
			id: '3',
			name: 'Curved Snake',
			length: 5,
			body: [
				{ x: 1, y: 1 },
				{ x: 2, y: 1 },
				{ x: 3, y: 1 },
				{ x: 3, y: 2 },
				{ x: 3, y: 3 }
			]
		}
	}
};

export const LowHealth: Story = {
	args: {
		snake: {
			...baseSnake,
			id: '4',
			name: 'Hungry Snake',
			health: 10,
			body: [
				{ x: 4, y: 4 },
				{ x: 4, y: 5 },
				{ x: 4, y: 6 }
			]
		}
	}
};

export const Bot: Story = {
	args: {
		snake: {
			...baseSnake,
			id: '5',
			name: 'Bot Snake',
			is_bot: true,
			color: '#0000ff',
			body: [
				{ x: 7, y: 7 },
				{ x: 7, y: 8 },
				{ x: 7, y: 9 }
			]
		}
	}
};

export const Dead: Story = {
	args: {
		snake: {
			...baseSnake,
			id: '6',
			name: 'Dead Snake',
			alive: false,
			health: 0,
			body: [
				{ x: 0, y: 0 },
				{ x: 1, y: 0 },
				{ x: 2, y: 0 }
			]
		}
	}
};

export const JustAte: Story = {
	args: {
		snake: {
			...baseSnake,
			id: '6',
			name: 'Dead Snake',
			alive: false,
			health: 0,
			body: [
				{ x: 0, y: 0 },
				{ x: 1, y: 0 },
				{ x: 2, y: 0 },
				{ x: 2, y: 0 }
			]
		}
	}
};
