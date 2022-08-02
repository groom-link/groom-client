import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NoticeBell from './index';

export default {
  title: 'icons/NoticeBell',
  component: NoticeBell
} as ComponentMeta<typeof NoticeBell>;

export const Primary: ComponentStory<typeof NoticeBell> = () => <NoticeBell />;
