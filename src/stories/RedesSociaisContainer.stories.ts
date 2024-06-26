import type { Meta, StoryObj } from '@storybook/react';
import RedesSociaisContainer from '@/components/RedesSociaisContainer';

const meta = {
    title: 'Login/RedesSociais/Container',
    component: RedesSociaisContainer,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RedesSociaisContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const icones = {
    email: require("../../public/email-icon.svg"),
    whatsapp: require("../../public/whatsapp-icon.svg"),
    sms: require("../../public/sms-icon.svg")
}



export const Login: Story = {
    args: {
        ComponentesLinha: 3,
        PropsList: [
            {
                label: 'Email',
                imagem: icones.email,
                alt: 'email',
            },
            {
                label: 'Whatsapp',
                imagem: icones.whatsapp,
                alt: 'whatsapp',
            },
            {
                label: 'SMS',
                imagem: icones.sms,
                alt: 'sms',
            }
        ]
    },
};