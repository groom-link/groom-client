import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from './index';

export default {
  title: 'atoms/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

export const DefaultImage: ComponentStory<typeof Avatar> = () => <Avatar />;

export const UserImage: ComponentStory<typeof Avatar> = ({
  src = 'images/profileImage.jpg'
}) => <Avatar {...{ src }} />;
