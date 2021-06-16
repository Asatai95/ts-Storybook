import { Meta, Story } from '@storybook/react';
import imageFile from '../images/apple-touch-icon.png';
import { Image } from './Image';

const meta: Meta = {
    title: 'Button',
    component: Image,
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

type TImage = {
    src: any,
    alt: string,
}

const Template: Story<TImage> = (args) => <Image {...args}/>;

export const Viewer = Template.bind({});
Viewer.args = {
    src: imageFile,
    alt: 'my image',
};

export default meta;