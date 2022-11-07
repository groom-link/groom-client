import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Button, SuggestionTimeList } from '../../../../components/atoms';
import { TopNavBar } from '../../../../components/molecules';
import TimePicker from '../../../../components/molecules/TimePicker';
import { UseDatetimePicker } from '../../../../hooks';
import usePostUnableSchedule from '../../../../hooks/api/unableSchedule/postUnableSchedule';
import colors from '../../../../styles/colors';
import { medium12, semiBold20 } from '../../../../styles/typography';

const EXCEPTION_TIME_MOCK = [
  {
    id: 1,
    startTime: '2022-11-04T10:00:00',
    endTime: '2022-11-05T10:23:59'
  },
  {
    id: 2,
    startTime: '2022-11-04T10:00:00',
    endTime: '2022-11-05T10:23:59'
  },
  {
    id: 3,
    startTime: '2022-11-04T10:00:00',
    endTime: '2022-11-05T10:23:59'
  },
  {
    id: 4,
    startTime: '2022-11-04T10:00:00',
    endTime: '2022-11-05T10:23:59'
  },
  {
    id: 5,
    startTime: '2022-11-04T10:00:00',
    endTime: '2022-11-05T10:23:59'
  },
  {
    id: 6,
    startTime: '2022-11-04T10:00:00',
    endTime: '2022-11-05T10:23:59'
  }
];

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
  const {
    mutate: postUnableSchedule,
    isError: isPostUnableSchduleError,
    isLoading: isPostUnableSchduleLoading
  } = usePostUnableSchedule();
  const { startDatetime, endDatetime, setStartDatetime, setEndDatetime } =
    UseDatetimePicker();
  const [deleteModeId, setDeleteModeId] = useState<number>(-1);

  const handleExcludedTimeSumbit = () =>
    postUnableSchedule({
      startTime: startDatetime,
      endTime: endDatetime,
      roomId: 66
    });
  // TODO: roomId는 API에서 받아오도록 수정.

  const handleStartDatetimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setStartDatetime(value);

  const handleEndDatetimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setEndDatetime(value);

  const handleBackButtonClick = () => Router.push('./');

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
      {EXCEPTION_TIME_MOCK.map(({ id, startTime, endTime }) => (
        <SuggestionTimeList
          key={startTime + endTime}
          type="delete"
          isDeleteButtonExposed={true}
          onClick={() => {}}
          onDeleteButtonClick={() => {}}
          {...{ startTime, endTime }}
        />
      ))}
    </Background>
  );
};

export default Edit;
