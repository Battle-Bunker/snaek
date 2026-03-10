import type { Meta, StoryObj } from '@storybook/sveltekit';

import Grid from '$lib/components/Grid.svelte';

const meta = {
	component: Grid
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
	args: {
		width: 10,
		height: 10,
		food: [],
		hazards: []
	}
};

export const WithFood: Story = {
	args: {
		width: 10,
		height: 10,
		food: [
			{ x: 2, y: 3 },
			{ x: 7, y: 5 }
		],
		hazards: []
	}
};

export const WithHazards: Story = {
	args: {
		width: 10,
		height: 10,
		food: [],
		hazards: [
			{ x: 4, y: 4 },
			{ x: 5, y: 4 },
			{ x: 6, y: 4 }
		]
	}
};

export const FoodAndHazards: Story = {
	args: {
		width: 10,
		height: 10,
		food: [
			{ x: 1, y: 1 },
			{ x: 8, y: 8 },
			{ x: 3, y: 4 }
		],
		hazards: [
			{ x: 3, y: 3 },
			{ x: 3, y: 4 },
			{ x: 3, y: 5 }
		]
	}
};

export const SmallBoard: Story = {
	args: {
		width: 3,
		height: 3,
		food: [{ x: 1, y: 1 }],
		hazards: []
	}
};

export const EdgeCoordinates: Story = {
	args: {
		width: 10,
		height: 10,
		food: [
			{ x: 0, y: 0 },
			{ x: 9, y: 9 }
		],
		hazards: [
			{ x: 0, y: 9 },
			{ x: 9, y: 0 }
		]
	}
};
