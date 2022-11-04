import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';
import makeDateTimeString from '../../../utils/makeDatetimeString';

type Props = {
  className?: string;
  startTime: string;
  endTime: string;
  href?: string;
};

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
  border-bottom: 1px solid ${colors.grayScale.gray02};
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
  border-bottom: 1px solid ${colors.grayScale.gray02};
  text-decoration: none;
`;

const Tilde = styled.span`
  margin: 0 30px;
  ${regular16}
  color: ${colors.grayScale.gray03};
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

type DateAndTimeProps = Pick<Props, 'startTime' | 'endTime'>;

const DateAndTime = ({ startTime, endTime }: DateAndTimeProps) => {
  const { dateString: startDateString, timeString: startTimeString } =
    makeDateTimeString(startTime);
  const { dateString: endDateString, timeString: endTimeString } =
    makeDateTimeString(endTime);
  return (
    <>
      <div>
        <Date>{startDateString}</Date>
        <Time>{startTimeString}</Time>
      </div>
      <Tilde>~</Tilde>
      <div>
        <Date>{endDateString}</Date>
        <Time>{endTimeString}</Time>
      </div>
    </>
  );
};

const SuggestionTimeList = ({ className, startTime, endTime, href }: Props) => {
  const { dateString: startDateString, timeString: startTimeString } =
    makeDateTimeString(startTime);
  const { dateString: endDateString, timeString: endTimeString } =
    makeDateTimeString(endTime);

  return href ? (
    <Link passHref href={href}>
      <LinkContainer>
        <DateAndTime {...{ startTime, endTime }} />
      </LinkContainer>
    </Link>
  ) : (
    <Container className={className}>
      <DateAndTime {...{ startTime, endTime }} />
    </Container>
  );
};

export default SuggestionTimeList;
