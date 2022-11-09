import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '../../../components/atoms';
import { Kakao } from '../../../components/atoms/icons';
import { TopCancelBar } from '../../../components/molecules';
import Image from '../../../components/utils/Image';
import colors from '../../../styles/colors';
import { bold16, regular16, semiBold24 } from '../../../styles/typography';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-top: 8vh;
  text-align: center;
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
  const [code, setCode] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteCode = urlParams.get('code');
    if (!inviteCode) return;
    setCode(inviteCode);
  }, []);

  return (
    <>
      <TopCancelBar cancelURL="/home?group=true" />
      <MainBox>
        <LogoContainer>
          <Image
            src="/illustrations/Megaphone.png"
            width="200"
            height="200"
            alt="확성기 로고"
          />
        </LogoContainer>
        <BoldText>새로운 모임이 만들어졌습니다!</BoldText>
        <Description>이제 모임원들을 초대해보세요.</Description>
        <BoldText>{code}</BoldText>
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
