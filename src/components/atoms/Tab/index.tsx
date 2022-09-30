import { ReactNode } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  isSelected: boolean;
  htmlFor: string;
  children: ReactNode;
};

const Label = styled.label<Pick<Props, 'isSelected'>>`
  ${semiBold16}
  color: ${({ isSelected }) =>
    isSelected ? colors.grayScale.gray05 : colors.grayScale.gray03};
`;

const Tab = ({ className, isSelected, htmlFor, children }: Props) => {
  return <Label {...{ className, isSelected, htmlFor }}>{children}</Label>;
};

export default Tab;
