import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonFooter from './index';

export default {
  title: 'molecules/ButtonFooter',
  component: ButtonFooter
} as ComponentMeta<typeof ButtonFooter>;

export const Primary: ComponentStory<typeof ButtonFooter> = ({
  children = '버튼',
  onClick,
  disabled
}) => <ButtonFooter {...{ onClick, disabled }}>{children}</ButtonFooter>;
