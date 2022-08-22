import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TopCancelBar from './index';

export default {
  title: 'molecules/TopCancelBar',
  component: TopCancelBar
} as ComponentMeta<typeof TopCancelBar>;

export const Primary: ComponentStory<typeof TopCancelBar> = ({
  cancelURL = ''
}) => <TopCancelBar cancelURL={cancelURL} />;
