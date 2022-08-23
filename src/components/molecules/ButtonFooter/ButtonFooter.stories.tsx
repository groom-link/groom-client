import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonFooter from './index';

export default {
  title: 'molecules/ButtonFooter',
  component: ButtonFooter
} as ComponentMeta<typeof ButtonFooter>;

export const Primary: ComponentStory<typeof ButtonFooter> = ({
  label,
  onClick,
  disabled
}) => <ButtonFooter {...{ label, onClick, disabled }} />;
