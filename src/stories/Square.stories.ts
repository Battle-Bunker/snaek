import type { Meta, StoryObj } from '@storybook/sveltekit';

import Cell from '$lib/components/Cell.svelte';

const meta = {
	component: Cell
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Food: Story = {
	args: {
		food: true,
		hazard: false
	}
};

export const hazard: Story = {
	args: {
		food: false,
		hazard: true
	}
};

export const hazardFood: Story = {
	args: {
		food: true,
		hazard: true
	}
};
