import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TrashCan from './index';

export default {
  title: 'icons/TrashCan',
  component: TrashCan
} as ComponentMeta<typeof TrashCan>;

export const Primary: ComponentStory<typeof TrashCan> = () => <TrashCan />;
