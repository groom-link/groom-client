import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { Cancel } from '../../atoms/icons';

const NavBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 44px;
  background-color: ${colors.grayScale.white};
`;

type Props = { cancelURL: string };

const TopCancelBar = ({ cancelURL }: Props) => {
  return (
    <NavBoxDiv>
      <Link href={cancelURL}>
        <a>
          <Cancel width="24px" height="24px" />
        </a>
      </Link>
    </NavBoxDiv>
  );
};

export default TopCancelBar;
