import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SuggestionTimeList from './index';

export default {
  title: 'atoms/SuggestionTimeList',
  component: SuggestionTimeList
} as ComponentMeta<typeof SuggestionTimeList>;

export const Primary: ComponentStory<typeof SuggestionTimeList> = ({
  startTime = '2022-11-04T10:00:00:00',
  endTime = '2022-11-05T10:23:59:00',
  ...props
}) => {
  const [isDeleteButtonExposed, setIsDeleteButtonExposed] = useState(false);

  const handleListClick = () => setIsDeleteButtonExposed((pre) => !pre);

  const handleDeleteButtonClick = () => alert('삭제');

  if (props.type === 'link') {
    const { href } = props;
    return <SuggestionTimeList type="link" {...{ startTime, endTime, href }} />;
  }

  return (
    <SuggestionTimeList
      type="delete"
      isDeleteButtonExposed={isDeleteButtonExposed}
      onClick={handleListClick}
      onDeleteButtonClick={handleDeleteButtonClick}
      {...{ startTime, endTime }}
    />
  );
};
