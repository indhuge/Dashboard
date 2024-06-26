import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ButtonRedefinirSenha from '@/components/ButtonRedefinirSenha';

const meta = {
  title: 'Login/ButtonRedefinirSenha',
  component: ButtonRedefinirSenha,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonRedefinirSenha>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EsqueciMinhaSenha: Story = {
  args: {
    label: 'Esqueci minha senha.',
  },
};