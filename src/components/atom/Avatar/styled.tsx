import Image from 'next/image';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';

export const CircleDiv = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${colors.grayScale.gray03};

  & > span {
    // To remove next/image default styling
    position: static !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ProfileImg = styled(Image)`
  // To remove next/image default styling
  position: static !important;
  width: initial !important;
  height: initial !important;
  border-radius: 22px;
  object-fit: cover;
`;
