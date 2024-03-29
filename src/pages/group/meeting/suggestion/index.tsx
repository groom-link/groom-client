import Link from 'next/link';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Button, Logo, SuggestionTimeList } from '../../../../components/atoms';
import { TopNavBar } from '../../../../components/molecules';
import useGetRecommendTime from '../../../../hooks/api/room/getRecommend';
import useRoomIdParams from '../../../../hooks/useRoomIdParams';
import colors from '../../../../styles/colors';
import { semiBold16, semiBold20 } from '../../../../styles/typography';

const SUGGESTION_TIME_MOCK = [
  {
    date: '2022.09.01 (목)',
    time: '오전 10:00'
  },
  {
    date: '2022.09.02 (목)',
    time: '오전 10:00'
  },
  {
    date: '2022.09.03 (목)',
    time: '오전 10:00'
  },
  {
    date: '2022.09.04 (목)',
    time: '오전 10:00'
  },
  {
    date: '2022.09.05 (목)',
    time: '오전 10:00'
  },
  {
    date: '2022.09.06 (목)',
    time: '오전 10:00'
  },
  {
    date: '2022.09.07 (목)',
    time: '오전 10:00'
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

const SuggestionTimeListStyled = styled(SuggestionTimeList)`
  &:last-of-type {
    margin-bottom: 24px;
  }
`;

const EditLink = styled.a`
  ${semiBold16}
  display: block;
  padding: 10px 12px;
  color: ${colors.grayScale.gray04};
  text-decoration: none;
`;

const EmptyLogo = styled(Logo)`
  margin: 140px auto 20px;
`;

const EmptyDescription = styled.span`
  ${semiBold20}
  display: block;
  margin-bottom: 36px;
  color: ${colors.grayScale.gray04};
  text-align: center;
`;

const AddTimeButton = styled(Button)`
  margin: 0 auto;
`;

const Suggestion = () => {
  const roomId = useRoomIdParams();
  const {
    data: recommendTimes,
    isError: isRecommendTimeError,
    isLoading: isRecommendTimeLoading
  } = useGetRecommendTime({
    roomId,
    query: { date: new Date().toISOString().split('T')[0] }
  });

  const handleClickAddMenually = () => Router.push(`./add?roomId=${roomId}`);

  const handleBackButtonClick = () =>
    Router.push(`/group/meeting?roomId=${roomId}`);

  if (isRecommendTimeLoading) return <div>추천 시간 로딩중...</div>;
  if (isRecommendTimeError) return <div>추천 시간 불러오기 에러!</div>;
  if (recommendTimes === undefined) return <div>추천 시간 데이터 에러!</div>;

  return (
    <>
      <TopNavBar setting={false} onBackButtonClick={handleBackButtonClick} />
      {recommendTimes.length ? (
        <>
          <TitleContainer>
            <Title>회의가 가능한 날들이에요.</Title>
            <Link passHref href={`./suggestion/edit?roomId=${roomId}`}>
              <EditLink>불가능 시간</EditLink>
            </Link>
          </TitleContainer>
          {recommendTimes.map(({ startTime, endTime }) => (
            <SuggestionTimeListStyled
              key={startTime + endTime}
              type="link"
              href={`./add?roomId=${roomId}&startTime=${startTime}&endTime=${endTime}`}
              {...{ startTime, endTime }}
            />
          ))}
        </>
      ) : (
        <>
          <EmptyLogo />
          <EmptyDescription>추천할 수 있는 시간대가 없어요.</EmptyDescription>
        </>
      )}
      <AddTimeButton
        size="large"
        width="250px"
        disabled={false}
        color="purple"
        onClick={handleClickAddMenually}
      >
        시간 직접 추가하기
      </AddTimeButton>
    </>
  );
};

export default Suggestion;
