import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps, ThemeText } from './text'; // Adjust the import path as needed

export default {
    title: 'Components/Text',
    component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: ThemeText.PRIMARY,
    children: 'Primary Text',
};

export const Error = Template.bind({});
Error.args = {
    theme: ThemeText.ERROR,
    children: 'Error Text',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    theme: ThemeText.PRIMARY,
    title: 'Title Text',
};

export const WithText = Template.bind({});
WithText.args = {
    theme: ThemeText.ERROR,
    text: 'Text Text',
};
