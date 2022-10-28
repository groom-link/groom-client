import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  date: string;
  time: string;
  href?: string;
};

const LinkContainer = styled.a`
  display: block;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
  text-decoration: none;
`;

const Container = styled.div`
  display: block;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
  text-decoration: none;
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

const SuggestionTimeList = ({ className, date, time, href }: Props) => {
  return href ? (
    <Link passHref href={href}>
      <LinkContainer className={className}>
        <Date>{date}</Date>
        <Time>{time}</Time>
      </LinkContainer>
    </Link>
  ) : (
    <Container className={className}>
      <Date>{date}</Date>
      <Time>{time}</Time>
    </Container>
  );
};

export default SuggestionTimeList;
