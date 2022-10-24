import styled from '@emotion/styled';

import { Button, Logo } from '../../../components/atoms';
import { Kakao } from '../../../components/atoms/icons';
import { TopCancelBar } from '../../../components/molecules';
import colors from '../../../styles/colors';
import { bold16, regular16, semiBold24 } from '../../../styles/typography';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TemporaryLogo = styled(Logo)`
  margin-top: 80px;
`;

const BoldText = styled.h1`
  ${semiBold24}
  margin-top: 20px;
  color: ${colors.grayScale.gray05};
`;

const Description = styled.span`
  ${regular16}
  margin-top: 8px;
  color: ${colors.grayScale.gray04};
`;

const CodePasteButton = styled(Button)`
  margin-top: 24px;
`;

const KakaoShareButton = styled.button`
  ${bold16}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 56px;
  margin-top: 20px;
  padding: 0 35px 0 16px;
  border-radius: 12px;
  color: ${colors.grayScale.gray06};
  background-color: #fee500;
`;

const Success = () => {
  return (
    <>
      <TopCancelBar cancelURL="/home?group=true" />
      <MainBox>
        <TemporaryLogo />
        <BoldText>새로운 모임이 만들어졌습니다!</BoldText>
        <Description>이제 모임원들을 초대해보세요.</Description>
        <BoldText>247 342</BoldText>
        <CodePasteButton
          width="250px"
          size="large"
          disabled={false}
          color="gray"
          onClick={() => console.log('clicked')}
        >
          모임 초대 링크 복사하기
        </CodePasteButton>
        <KakaoShareButton>
          <Kakao />
          카카오톡으로 공유하기
        </KakaoShareButton>
      </MainBox>
    </>
  );
};

export default Success;