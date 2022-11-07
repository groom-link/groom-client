import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';
import makeDateTimeString from '../../../utils/makeDatetimeString';

type DefaultProps = {
  className?: string;
  startTime: string;
  endTime: string;
};

type LinkProps = {
  type: 'link';
  href: string;
} & DefaultProps;

type DeleteProps = {
  type: 'delete';
  isDeleteButtonExposed: boolean;
  onClick: () => void;
  onDeleteButtonClick: () => void;
} & DefaultProps;

type Props = LinkProps | DeleteProps;

const TimeList = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
  border-bottom: 1px solid ${colors.grayScale.gray02};
  text-decoration: none;
`;

const Container = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
  border-bottom: 1px solid ${colors.grayScale.gray02};
  text-decoration: none;
  text-align: left;
`;

const Tilde = styled.span`
  margin: 0 30px;
  ${regular16}
  color: ${colors.grayScale.gray03};
`;

const DatetimeContainer = styled.div`
  min-width: 124px;
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

const DeleteButton = styled.button<Pick<DeleteProps, 'isDeleteButtonExposed'>>`
  ${semiBold16}
  min-width: ${({ isDeleteButtonExposed }) =>
    isDeleteButtonExposed ? '64px' : '0'};
  max-width: ${({ isDeleteButtonExposed }) =>
    isDeleteButtonExposed ? '64px' : '0'};
  color: ${colors.grayScale.white};
  background-color: ${colors.etcColor.alertRed};
  transition: min-width 0.15s;
  word-break: keep-all;
`;

type DateAndTimeProps = Pick<Props, 'startTime' | 'endTime'>;

const DateAndTime = ({ startTime, endTime }: DateAndTimeProps) => {
  const { dateString: startDateString, timeString: startTimeString } =
    makeDateTimeString(startTime);
  const { dateString: endDateString, timeString: endTimeString } =
    makeDateTimeString(endTime);
  return (
    <>
      <DatetimeContainer>
        <Date>{startDateString}</Date>
        <Time>{startTimeString}</Time>
      </DatetimeContainer>
      <Tilde>~</Tilde>
      <DatetimeContainer>
        <Date>{endDateString}</Date>
        <Time>{endTimeString}</Time>
      </DatetimeContainer>
    </>
  );
};

const SuggestionTimeList = ({
  className,
  startTime,
  endTime,
  ...props
}: Props) => {
  if (props.type === 'link') {
    const { href } = props;

    return (
      <Link passHref href={href}>
        <LinkContainer className={className}>
          <DateAndTime {...{ startTime, endTime }} />
        </LinkContainer>
      </Link>
    );
  }

  const { isDeleteButtonExposed, onClick, onDeleteButtonClick } = props;

  return (
    <>
      <TimeList className={className}>
        <Container onClick={onClick}>
          <DateAndTime {...{ startTime, endTime }} />
        </Container>
        <DeleteButton
          isDeleteButtonExposed={isDeleteButtonExposed}
          onClick={onDeleteButtonClick}
        >
          삭제
        </DeleteButton>
      </TimeList>
    </>
  );
};

export default SuggestionTimeList;
