import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';

const meta = {
  title: 'Login/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primario: Story = {
  args: {
    primario: true,
    label: 'Button',
  },
};

export const Secundario: Story = {
  args: {
    primario: false,
    label: 'Button',
  },
};