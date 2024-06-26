import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from '../components/Input';

const meta = {
  title: 'Login/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Texto: Story = {
  args: {
    type: "text",
    label: 'Nome',
    placeholder: "Digite aqui seu nome"
  },
};

export const Email: Story = {
  args: {
    type: "email",
    label: 'Email*',
    placeholder: "Digite aqui seu email"
  },
};

export const Senha: Story = {
  args: {
    type: "password",
    label: 'Senha',
    placeholder: "Digite aqui sua senha"
  },
};

export const Telefone: Story = {
  args: {
    type: "tel",
    label: 'Telefone',
    placeholder: "Digite aqui seu fone"
  },
};
