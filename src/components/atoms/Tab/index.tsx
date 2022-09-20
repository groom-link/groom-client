import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  isSelected: boolean;
};

const TabButton = styled.button<Pick<Props, 'isSelected'>>`
  ${semiBold16}
  color: ${({ isSelected }) =>
    isSelected ? colors.grayScale.gray05 : colors.grayScale.gray03};
`;

const Tab = ({ className, isSelected }: Props) => {
  return (
    <TabButton type="button" {...{ className, isSelected }}>
      Tab
    </TabButton>
  );
};

export default Tab;
