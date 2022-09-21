import { ReactNode } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  isSelected: boolean;
  children: ReactNode;
};

const TabButton = styled.button<Pick<Props, 'isSelected'>>`
  ${semiBold16}
  color: ${({ isSelected }) =>
    isSelected ? colors.grayScale.gray05 : colors.grayScale.gray03};
`;

const Tab = ({ className, isSelected, children }: Props) => {
  return (
    <TabButton type="button" {...{ className, isSelected }}>
      {children}
    </TabButton>
  );
};

export default Tab;
