import React, { ChangeEventHandler, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './index';

export default {
  title: 'atoms/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = ({
  children = '태그',
  ...props
}) => {
  const handleCancel = () => console.log('canceled');

  const { type } = props;

  if (type === 'cancel') {
    return (
      <Tag type="cancel" onCancel={handleCancel}>
        {children}
      </Tag>
    );
  }

  const { onTyping } = props;

  return (
    <Tag type="default" onTyping={onTyping}>
      {children}
    </Tag>
  );
};
