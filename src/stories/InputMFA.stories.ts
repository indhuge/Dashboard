import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputMFA from '../components/InputMFA';

const meta = {
  title: 'Login/InputMFA',
  component: InputMFA,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputMFA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MFA: Story = {
  args: {
    digits: 4,
  },
};

export const IncorretoMFA: Story = {
  args: {
    digits: 4,
    incorect: true
  },
};