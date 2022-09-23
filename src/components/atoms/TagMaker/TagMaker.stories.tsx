import React, { ChangeEventHandler, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TagMaker from './index';

export default {
  title: 'atoms/TagMaker',
  component: TagMaker
} as ComponentMeta<typeof TagMaker>;

export const Primary: ComponentStory<typeof TagMaker> = ({
  inputRef,
  onKeyDown,
  onBlur
}) => {
  const [value, setValue] = useState('#');

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setValue(value);

  return (
    <TagMaker
      onChange={handleChangeValue}
      {...{ value, inputRef, onKeyDown, onBlur }}
    />
  );
};
