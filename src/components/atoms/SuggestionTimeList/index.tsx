import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  date: string;
  time: string;
};

const Container = styled.div`
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
`;

const Date = styled.span`
  ${semiBold16}
  color: ${colors.mainColor.navy};
`;

const Time = styled.span`
  ${regular16}
  display: block;
  color: ${colors.grayScale.gray03};
`;

const SuggestionTimeList = ({ className, date, time }: Props) => {
  return (
    <Container className={className}>
      <Date>{date}</Date>
      <Time>{time}</Time>
    </Container>
  );
};

export default SuggestionTimeList;
