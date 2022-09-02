import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import GoBackHome from './index';

export default {
  title: 'templates/GoBackHome',
  component: GoBackHome
} as ComponentMeta<typeof GoBackHome>;

export const Primary: ComponentStory<typeof GoBackHome> = ({
  title = '제목입니다.',
  description = '설명입니다. 설명입니다.'
}) => <GoBackHome {...{ title, description }} />;
