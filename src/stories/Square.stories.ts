import type { Meta, StoryObj } from '@storybook/sveltekit';

import Square from '$lib/components/Square.svelte';

const meta = {
	component: Square
} satisfies Meta<typeof Square>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const explicitEmpty: Story = {
	name: 'Explicit Empty',
	args: {
		contents: 'empty'
	}
};

export const Food: Story = {
	args: {
		contents: 'food'
	}
};

export const hazard: Story = {
	args: {
		contents: 'hazard'
	}
};
