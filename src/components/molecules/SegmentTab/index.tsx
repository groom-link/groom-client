import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { Tab } from '../../atoms';

type Props = {
  className?: string;
  leftTabLabel: string;
  rightTabLabel: string;
  leftTabHref: string;
  rightTabHref: string;
  selectedTabIndex: 0 | 1;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 8px;
  background-color: ${colors.grayScale.gray01};
`;

const TabContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 8px) / 2);
  padding: 6px 0;
  border-radius: 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? colors.grayScale.white : 'transparent'};
`;

const TabStyled = styled(Tab)`
  flex: 1;
`;

const SegmentTab = ({
  className,
  leftTabLabel,
  rightTabLabel,
  leftTabHref,
  rightTabHref,
  selectedTabIndex
}: Props) => {
  return (
    <Container className={className}>
      <TabContainer isSelected={selectedTabIndex === 0}>
        <TabStyled
          isSelected={selectedTabIndex === 0}
          htmlFor="tab1"
          href={leftTabHref}
        >
          {leftTabLabel}
        </TabStyled>
      </TabContainer>
      <TabContainer isSelected={selectedTabIndex === 1}>
        <TabStyled
          isSelected={selectedTabIndex === 1}
          htmlFor="tab2"
          href={rightTabHref}
        >
          {rightTabLabel}
        </TabStyled>
      </TabContainer>
    </Container>
  );
};

export default SegmentTab;
