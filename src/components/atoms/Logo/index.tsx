import styled from '@emotion/styled';

import colors from '../../../styles/colors';

type Props = {
  className?: string;
};

const TemporaryLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 1px solid ${colors.grayScale.gray04};
  color: ${colors.grayScale.gray04};
  font-size: 40px;
`;

const Logo = ({ className }: Props) => {
  return <TemporaryLogo className={className}>Logo</TemporaryLogo>;
};

export default Logo;
