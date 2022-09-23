import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TagInput from './index';

export default {
  title: 'molecules/TagInput',
  component: TagInput
} as ComponentMeta<typeof TagInput>;

export const Primary: ComponentStory<typeof TagInput> = ({
  label = '라벨',
  placeholder = '플레이스 홀더'
}) => {
  const [tagList, setTagList] = useState<string[]>([]);

  const addTag = (text: string) => setTagList((pre) => [...pre, text]);

  const deleteTag = (index: number) => {
    setTagList((pre) => {
      const deforeTarget = pre.slice(0, index);
      const afterTarget = pre.slice(index + 1);
      return [...deforeTarget, ...afterTarget];
    });
  };

  return (
    <>
      <TagInput
        {...{
          label,
          placeholder,
          addTag,
          tagList,
          deleteTag,
          isTagExists: !!tagList.length
        }}
      />
    </>
  );
};
