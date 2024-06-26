import CadastroLink from "@/components/CadastroLink";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Login/CadastroLink',
  component: CadastroLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CadastroLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NaoPossuiConta: Story = {
  args: {
    label: 'Não possui conta?',
    linkText: 'Cadastre-se',
    href: '',
  },
};