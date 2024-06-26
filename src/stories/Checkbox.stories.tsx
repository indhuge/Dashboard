import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../components/Checkbox';

export default {
    title: 'Login/Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            control: 'text',
            defaultValue: 'Label',
        },
        checked: {
            control: 'boolean',
            defaultValue: false,
        },
    },
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => (
    <Checkbox {...args} />
);

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
    label: 'Manter conectado',
    checked: false,
};


