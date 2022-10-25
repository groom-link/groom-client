import styled from '@emotion/styled';

import { Button, SuggestionTimeList } from '../../../components/atoms';
import { TopNavBar } from '../../../components/molecules';
import colors from '../../../styles/colors';
import { semiBold16, semiBold20 } from '../../../styles/typography';

const SUGGESTION_TIME_MOCK = [
  {
    date: '2022.09.01 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  },
  {
    date: '2022.09.02 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  },
  {
    date: '2022.09.03 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  },
  {
    date: '2022.09.04 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  },
  {
    date: '2022.09.05 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  },
  {
    date: '2022.09.06 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  },
  {
    date: '2022.09.07 (목)',
    time: '오전 10:00 ~ 오후 12:00'
  }
];

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 16px;
`;

const Title = styled.h1`
  display: block;
  padding: 7px 0;
  ${semiBold20}
  color: ${colors.grayScale.gray05};
`;

const EditLink = styled.a`
  display: block;
  padding: 10px 12px;
  ${semiBold16}
  color: ${colors.grayScale.gray04};
`;

const AddTimeButton = styled(Button)`
  margin: 24px auto 0;
`;

const Suggestion = () => {
  return (
    <>
      <TopNavBar setting={false} backURL="../" />
      <TitleContainer>
        <Title>회의가 가능한 날들이에요.</Title>
        <EditLink>수정</EditLink>
      </TitleContainer>
      {SUGGESTION_TIME_MOCK.map(({ date, time }) => (
        <SuggestionTimeList key={date + time} {...{ date, time }} />
      ))}
      <AddTimeButton
        size="large"
        width="250px"
        disabled={false}
        color="purple"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        시간 직접 추가하기
      </AddTimeButton>
    </>
  );
};

export default Suggestion;
