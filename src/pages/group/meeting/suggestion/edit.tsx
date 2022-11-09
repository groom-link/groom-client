import { ChangeEventHandler, useEffect, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Button, SuggestionTimeList } from '../../../../components/atoms';
import { TopNavBar } from '../../../../components/molecules';
import TimePicker from '../../../../components/molecules/TimePicker';
import { UseDatetimePicker } from '../../../../hooks';
import useDeleteUnableSchedule from '../../../../hooks/api/room/deleteUnableSchedule';
import useGetUnableScheduleTime from '../../../../hooks/api/room/getUnableScheduleTime';
import usePostUnableSchedule from '../../../../hooks/api/unableSchedule/postUnableSchedule';
import colors from '../../../../styles/colors';
import { medium12, semiBold20 } from '../../../../styles/typography';
import { queryClient } from '../../../_app';

const Background = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20};
  display: block;
  color: ${colors.grayScale.gray05};
`;

const AddButton = styled(Button)`
  margin: 0 auto 12px;
`;

const Description = styled.span`
  display: block;
  ${medium12}
  color: ${colors.grayScale.gray03};
  text-align: center;
`;

const Edit = () => {
  const [roomId, setRoomId] = useState(0);
  const [deleteModeId, setDeleteModeId] = useState<number>(-1);
  const { mutate: postUnableSchedule } = usePostUnableSchedule();
  const { mutate: deleteUnableSchedule } = useDeleteUnableSchedule();
  const {
    data: unableScheduleTimeData,
    isError: isUnableScheduleTimeError,
    isLoading: isUnableScheduleTimeLoading
  } = useGetUnableScheduleTime(roomId);
  const { startDatetime, endDatetime, setStartDatetime, setEndDatetime } =
    UseDatetimePicker();

  useEffect(() => {
    const { roomId } = Router.query;
    if (!roomId) return;
    if (typeof roomId !== 'string') return;
    setRoomId(parseInt(roomId, 10));
  });

  const handleExcludedTimeSumbit = () =>
    postUnableSchedule(
      {
        startTime: startDatetime,
        endTime: endDatetime,
        roomId
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['getUnableScheduleTime']);
          queryClient.invalidateQueries(['getRecommendTime']);
        }
      }
    );

  const handleStartDatetimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setStartDatetime(value);

  const handleEndDatetimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setEndDatetime(value);

  const handleBackButtonClick = () => Router.push(`./?roomId=${roomId}`);

  if (isUnableScheduleTimeLoading) return <div>회의 불가능 시간 로딩중...</div>;
  if (isUnableScheduleTimeError)
    return <div>회의 불가능 시간 불러오기 에러!</div>;
  if (unableScheduleTimeData === undefined)
    return <div>회의 불가능 시간 데이터 에러!</div>;

  return (
    <Background>
      <TopNavBar onBackButtonClick={handleBackButtonClick} setting={false} />
      <WhiteBox>
        <Title>회의가 불가능한 시간들이애요.</Title>
      </WhiteBox>
      <TimePicker
        allDayOption={false}
        onChangeStartDatetime={handleStartDatetimeChange}
        onChangeEndDatetime={handleEndDatetimeChange}
        {...{ startDatetime, endDatetime }}
      />
      <WhiteBox>
        <AddButton
          color="purple"
          width="250px"
          size="medium"
          disabled={false}
          onClick={handleExcludedTimeSumbit}
        >
          제외할 시간 추가하기
        </AddButton>
        <Description>
          추가시 아래에 회의 불가능한 시간으로 표시됩니다.
        </Description>
      </WhiteBox>
      {unableScheduleTimeData.map(({ id, startTime, endTime }) => (
        <SuggestionTimeList
          key={id}
          type="delete"
          isDeleteButtonExposed={deleteModeId === id}
          onClick={() => {
            setDeleteModeId(id);
          }}
          onDeleteButtonClick={() =>
            deleteUnableSchedule(id, {
              onSuccess: () => {
                queryClient.invalidateQueries(['getUnableScheduleTime']);
                queryClient.invalidateQueries(['getRecommendTime']);
              }
            })
          }
          {...{ startTime, endTime }}
        />
      ))}
    </Background>
  );
};

export default Edit;
