import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import {
  Stepper,
  TextArea,
  TextInput,
  TopNavBar
} from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import { semiBold20 } from '../../styles/typography';

const Background = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(2)) {
    margin-top: 16px;
  }
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 12px;
  color: ${colors.grayScale.gray05};
`;

const MakeFormBasic = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const handleGroupNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setGroupName(value);

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setDescription(value);

  const decreasePeople = () =>
    setNumberOfPeople((pre) => {
      if (pre <= 0) return 0;
      return --pre;
    });

  const increasePeople = () => setNumberOfPeople((pre) => ++pre);

  const isValueExist = () => !!(groupName && description && numberOfPeople);

  const handleButtonClick = () => {
    if (!isValueExist()) return;
    Router.push('./make-form-additional');
  };

  return (
    <Background>
      <TopNavBar setting={false} backURL="/home" />
      <WhiteBox>
        <Title>새로운 모임을 만들어보세요.</Title>
        <TextInput
          label="모임 이름"
          placeholder="모임 이름을 입력해주세요."
          value={groupName}
          onChange={handleGroupNameChange}
        />
      </WhiteBox>
      <WhiteBox>
        <TextArea
          label="모임 내용"
          placeholder="예시) 저희는 OO을 하는 모임입니다."
          value={description}
          onChange={handleDescriptionChange}
        />
      </WhiteBox>
      <WhiteBox>
        <Stepper
          label="모임 구성원 수"
          value={numberOfPeople}
          onDecrease={decreasePeople}
          onIncrease={increasePeople}
          color="navy"
          decreaseDisabled={false}
          increaseDisabled={false}
        />
      </WhiteBox>
      <ButtonFooter
        label="다음"
        disabled={!isValueExist()}
        onClick={handleButtonClick}
      />
    </Background>
  );
};

export default MakeFormBasic;
