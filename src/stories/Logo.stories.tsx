import type { Meta, StoryObj } from '@storybook/react';
import Logo  from '../components/Logo';

const imageFile = require('./assets/indLogo.png');

const meta = {
  title: 'Login/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const imageLogo: Story = {
  args: {
     image: imageFile, 
     alt: "Logo"
    }
};