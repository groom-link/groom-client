import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';
import Avatar from '../Avatar';

type Props = {
  className?: string;
  src: string;
  name: string;
};

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

const MemberList = ({ className, src, name }: Props) => {
  return (
    <Container className={className}>
      <Avatar proptype="image" src={src} />
      <Name>{name}</Name>
    </Container>
  );
};

export default MemberList;
