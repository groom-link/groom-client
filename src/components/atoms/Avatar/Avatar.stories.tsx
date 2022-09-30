import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from './index';

export default {
  title: 'atoms/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

export const DefaultImage: ComponentStory<typeof Avatar> = () => (
  <Avatar proptype="image" />
);

export const UserImage: ComponentStory<typeof Avatar> = () => (
  <Avatar proptype="image" src="images/profileImage.jpg" />
);

export const MoreProfile: ComponentStory<typeof Avatar> = () => (
  <Avatar proptype="more-profile" count={3} />
);
