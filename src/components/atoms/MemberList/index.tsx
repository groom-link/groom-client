import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';
import Avatar from '../Avatar';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 20px;
  background-color: ${colors.grayScale.white};
`;

const Name = styled.span`
  ${regular16}
  margin-left: 12px;
  color: ${colors.grayScale.gray05};
`;

const MemberList = () => {
  return (
    <Container>
      <Avatar proptype="image" src={DEMO_PROFILE_IMAGE_URL} />
      <Name>구성원 이름</Name>
    </Container>
  );
};

export default MemberList;
