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
		content: 'empty'
	}
};

export const Food: Story = {
	args: {
		content: 'food'
	}
};

export const hazard: Story = {
	args: {
		content: 'hazard'
	}
};
