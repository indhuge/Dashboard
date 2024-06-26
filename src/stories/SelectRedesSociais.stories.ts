import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectRedesSociais from '../components/SelectRedesSociais';

const meta = {
    title: 'Login/RedesSociais/Select',
    component: SelectRedesSociais,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof SelectRedesSociais>;

export default meta;
type Story = StoryObj<typeof meta>;

const icones = {
    email: require("../../public/email-icon.svg"),
    whatsapp: require("../../public/whatsapp-icon.svg"),
    sms: require("../../public/sms-icon.svg")
}



export const Email: Story = {
    args: {
        label: 'Email',
        imagem: icones.email,
        alt: 'email',
        active: true
    },
};

export const Whatsapp: Story = {
    args: {
        label: 'Whatsapp',
        imagem: icones.whatsapp,
        alt: 'whatsapp',
        active: false
    },
};

export const SMS: Story = {
    args: {
        label: 'SMS',
        imagem: icones.sms,
        alt: 'sms',
        active: true
    },
};