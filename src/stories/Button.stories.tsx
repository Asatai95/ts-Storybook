import React from "react"
import { Button } from './Button';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            options: ['small', 'large'],
            control: {type: 'select'}
        },
        backgroundColor: {
            control: {type: 'color'}
        }
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ]
        }
    },
};

type TButton = {
    primary: boolean,
    label: string,
    size: string,
    backgroundColor: string
}

const Template: Story<TButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'primary',
    size: 'small',
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    primary: false,
    label: 'secondary',
}

export const Default = Template.bind({});
Default.args = {
    ...Primary.args,
    label: 'default'
}


export default meta;