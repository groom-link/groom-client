import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import GoBackHome from './index';

export default {
  title: 'templates/GoBackHome',
  component: GoBackHome
} as ComponentMeta<typeof GoBackHome>;

export const Primary: ComponentStory<typeof GoBackHome> = ({
  title = '제목입니다.',
  description = '설명입니다. 설명입니다.',
  purpleButtonLabel = '확인',
  onPurpleButtonClick,
  ...props
}) => {
  if (props.proptype === 'one-button')
    return (
      <GoBackHome
        proptype={props.proptype}
        {...{
          title,
          description,
          purpleButtonLabel,
          onPurpleButtonClick
        }}
      />
    );

  const { grayButtonLabel, grayButtonOnClick } = props;

  return (
    <GoBackHome
      proptype={props.proptype}
      grayButtonLabel={grayButtonLabel ?? '취소'}
      {...{
        title,
        description,
        purpleButtonLabel,
        onPurpleButtonClick,
        grayButtonOnClick
      }}
    />
  );
};
