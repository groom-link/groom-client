import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dialog from './index';

export default {
  title: 'molecules/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

export const Primary: ComponentStory<typeof Dialog> = ({
  isOpen = true,
  buttonType = 'one',
  title = '다이얼로그 제목',
  description = '다이얼로그 설명',
  isIllustrationExists = false,
  isPurpleButtonDisabled = false,
  purpleButtonText = '버튼 이름',
  onPurpleButtonClick = () => console.log('purple clicked')
}) => {
  if (buttonType === 'one')
    return (
      <Dialog
        {...{
          isOpen,
          buttonType,
          title,
          description: description,
          isIllustrationExists,
          isPurpleButtonDisabled,
          purpleButtonText,
          onPurpleButtonClick
        }}
      />
    );
  return (
    <Dialog
      {...{
        isOpen,
        buttonType,
        title,
        description: description,
        isIllustrationExists,
        isPurpleButtonDisabled,
        purpleButtonText,
        onPurpleButtonClick,
        isGrayButtonDisabled: false,
        grayButtonText: '버튼 이름',
        onGrayButtonClick: () => console.log('gray clicked')
      }}
    />
  );
};
