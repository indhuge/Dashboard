import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tipografia, { TipografiaProps } from "../components/Tipografia";

export default {
    title: 'Login/Tipografia',
    component: Tipografia,
    argTypes: {
        variant: {
            control: 'select',
            options: ['h1', 'h2', 'h3'],
        },
        fonteCustomizada: {
            control: 'text',
            description: 'Classes CSS para fonte personalizada',
        },
        children: {
            control: 'text',
            description: 'Conteúdo do componente Tipografia',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tipografia>;

type Story = StoryObj<TipografiaProps>;

export const Default: Story = (args: TipografiaProps) => <Tipografia {...args} />;

Default.args = {
    variant: 'h1',
    children: 'Exemplo de H1',
    fonteCustomizada: '',
};

export const CustomFont: Story = (args: TipografiaProps) => <Tipografia {...args} />;

CustomFont.args = {
    variant: 'h2',
    children: 'Fonte Personalizada e usando o H2',
    fonteCustomizada: 'font-serif text-red-500',
};

export const H3Exemplo: Story = (args: TipografiaProps) => <Tipografia {...args} />;

H3Exemplo.args = {
    variant: 'h3',
    children: 'Exemplo do H3',
    fonteCustomizada: '',
};
