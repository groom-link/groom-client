import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { Tab } from '../../atoms';

type Props = {
  className?: string;
  leftTabLabel: string;
  rightTabLabel: string;
  value: 'left' | 'right';
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 8px;
  background-color: ${colors.grayScale.gray01};
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 8px) / 2);
  padding: 6px 0;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const TabStyled = styled(Tab)`
  flex: 1;
`;

const Input = styled.input`
  display: none;
`;

const SegmentTab = ({
  className,
  leftTabLabel,
  rightTabLabel,
  value,
  onChange
}: Props) => {
  return (
    <Container className={className}>
      <TabContainer>
        <TabStyled isSelected={value === 'left'} htmlFor="tab1">
          {leftTabLabel}
        </TabStyled>
      </TabContainer>
      <Input
        type="radio"
        name="segment-tab"
        id="tab1"
        checked={value === 'left'}
        value="left"
        onChange={onChange}
      />
      <TabContainer>
        <TabStyled isSelected={value === 'right'} htmlFor="tab2">
          {rightTabLabel}
        </TabStyled>
      </TabContainer>
      <Input
        type="radio"
        name="segment-tab"
        id="tab2"
        checked={value === 'right'}
        value="right"
        onChange={onChange}
      />
    </Container>
  );
};

export default SegmentTab;
