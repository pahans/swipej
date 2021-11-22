import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from './Nav';

export default {
  title: 'NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Nav = Template.bind({});
Nav.args = {
    userName: 'User Name',
};