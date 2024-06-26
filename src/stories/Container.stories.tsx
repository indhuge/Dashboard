import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from '../components/Container';

export default {
    title: 'Login/Container',
    component: Container,
    argTypes: {
        children: {
            control: 'select',
            options: [
                '<div><h1>Título H1</h1><p>Parágrafo de texto.</p></div>',
                '<input type="text" placeholder="Digite algo..." />',
                '<input type="checkbox" />',
                '<button>Botão</button>',
                'all'
            ],
        },
    },
} as Meta;

const renderJSX = (jsxString: string) => {
    switch (jsxString) {
        case '<div><h1>Título H1</h1><p>Parágrafo de texto.</p></div>':
            return (
                <div>
                    <h1>Título H1</h1>
                    <p>Parágrafo de texto.</p>
                </div>
            );
        case '<input type="text" placeholder="Digite algo..." />':
            return <input type="text" placeholder="Digite algo..." />;
        case '<input type="checkbox" />':
            return (
                <div>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Checkbox</label>
                </div>
            );
        case '<button>Botão</button>':
            return <button>Botão</button>;
        case 'all':
            return (
                <div>
                    <h1>Título H1</h1>
                    <p>Parágrafo de texto.</p>
                    <br />
                    <input type="text" placeholder="Digite algo..." />
                    <br /><br />
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Checkbox</label>
                    </div>
                    <br />
                    <button>Botão</button>
                </div>
            );
        default:
            return null;
    }
};

const Template: StoryFn<ContainerProps> = (args: ContainerProps) => (
    <Container {...args}>
        {renderJSX(args.children as string)}
    </Container>
);

export const ChildrensDinamicos = Template.bind({});
ChildrensDinamicos.args = {
    children: '<div><h1>Título H1</h1><p>Parágrafo de texto.</p></div>',
};
