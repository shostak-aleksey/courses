// Sidebar.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CollapseProvider } from 'shared/ui/CollapseBtn/CollapseBtnContext';
import { Sidebar, SidebarProps } from './Sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar,
} as Meta;

const Template: StoryFn<SidebarProps> = (args) => (
    <CollapseProvider>
        <Sidebar {...args} />
    </CollapseProvider>
);

export const Default = Template.bind({});
Default.args = {
    // Add any necessary props here
};
