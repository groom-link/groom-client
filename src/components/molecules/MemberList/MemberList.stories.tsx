import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import MemberList from './index';

export default {
  title: 'molecules/MemberList',
  component: MemberList
} as ComponentMeta<typeof MemberList>;

export const Primary: ComponentStory<typeof MemberList> = ({
  src = DEMO_PROFILE_IMAGE_URL,
  name = '구성원 이름',
  check = true,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = () => setIsChecked((pre) => !pre);

  if (check)
    return (
      <MemberList
        onChange={handleCheckChange}
        {...{ src, name, check, isChecked }}
      />
    );

  return <MemberList {...{ src, name, check }} />;
};
