import { ChangeEventHandler } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Button } from '../../../components/atoms';
import {
  ImageUploadInput,
  SegmentTab,
  TagInput,
  TextArea,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import colors from '../../../styles/colors';

const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const TabContainer = styled.div`
  padding: 12px 20px;
  background-color: ${colors.grayScale.white};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(5)) {
    margin-bottom: 16px;
  }
`;

const TextAreaStyled = styled(TextArea)`
  margin-top: 20px;
`;

const Information = () => {
  const handleTabChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    if (value === 'left') return;
    Router.push('./member');
  };

  return (
    <Background>
      <TopNavBar setting={false} backURL="/group/home" />
      <TabContainer>
        <SegmentTab
          leftTabLabel="모임 정보"
          rightTabLabel="구성원 관리"
          value="left"
          onChange={handleTabChange}
        />
      </TabContainer>
      <ImageUploadInput
        profileImage={''}
        onClickDeleteImage={() => console.log()}
        onChangeImageFile={() => console.log()}
      />
      <WhiteBox>
        <TextInput
          value={''}
          onChange={() => console.log()}
          label="모임 이름"
          placeholder="모임 이름을 입력해주세요."
        />
        <TextAreaStyled
          value={''}
          onChange={() => console.log()}
          label="모임 내용"
          placeholder="예시) 저희는 oo을 하는 모임입니다."
        />
      </WhiteBox>
      <WhiteBox>
        <TagInput
          label="태그"
          tagList={[]}
          isTagExists={false}
          addTag={() => console.log()}
          deleteTag={() => console.log()}
        />
      </WhiteBox>
      <WhiteBox>
        <Button
          size="medium"
          disabled={false}
          color="gray"
          onClick={() => console.log()}
        >
          모임 끝내기
        </Button>
      </WhiteBox>
      <ButtonFooter
        disabled={false}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        모임 정보 수정하기
      </ButtonFooter>
    </Background>
  );
};
export default Information;
