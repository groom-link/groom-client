import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../../../__mocks__';
import { TextButton, Toggle } from '../../../../components/atoms';
import {
  MemberList,
  TextInput,
  TopNavBar
} from '../../../../components/molecules';
import ButtonFooter from '../../../../components/molecules/ButtonFooter';
import TimePicker from '../../../../components/molecules/TimePicker';
import { UseDatetimePicker } from '../../../../hooks';
import usePostTeamSchedules from '../../../../hooks/api/team-schedule/postSchedule';
import useNewMeetingFormStore from '../../../../store/meetingLocation';
import colors from '../../../../styles/colors';
import {
  medium12,
  semiBold16,
  semiBold20
} from '../../../../styles/typography';

const MEMBERS_MOCK = [
  {
    id: 1,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름1'
  },
  {
    id: 2,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름2'
  },
  {
    id: 3,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름3'
  },
  {
    id: 4,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름4'
  },
  {
    id: 5,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름5'
  }
];

const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const TitleContainer = styled.div`
  padding: 20px;
  margin-bottom: 16px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 20px;
  color: ${colors.grayScale.gray05};
`;

const MemberListLabel = styled.span`
  ${medium12}
  margin-top: 16px;
  padding: 20px 20px 8px;
  display: block;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
`;

const ToggleLabel = styled.span`
  ${semiBold16};
  color: ${colors.grayScale.gray04};
`;

const AddressInputContainer = styled.div`
  padding: 0 20px 16px;
  background-color: ${colors.grayScale.white};
`;

const SearchInMapButton = styled(TextButton)`
  display: block;
  margin: 16px auto 0;
`;

const Add = () => {
  const { startDatetime, endDatetime, setStartDatetime, setEndDatetime } =
    UseDatetimePicker();
  const [isOnlineMeeting, setIsOnlineMeeting] = useState(false);
  const title = useNewMeetingFormStore((state) => state.title);
  const startDateStored = useNewMeetingFormStore((state) => state.startDate);
  const endDateStored = useNewMeetingFormStore((state) => state.endDate);
  const participants = useNewMeetingFormStore((state) => state.participants);
  const setTitle = useNewMeetingFormStore((state) => state.setTitle);
  const address = useNewMeetingFormStore((state) => state.address);
  const coords = useNewMeetingFormStore((state) => state.coords);
  const setStartDatetimeStore = useNewMeetingFormStore(
    (state) => state.setStartDate
  );
  const setEndDatetimeStore = useNewMeetingFormStore(
    (state) => state.setEndDate
  );
  const setParticipants = useNewMeetingFormStore(
    (state) => state.setParticipants
  );
  const { isError, isLoading, mutate, isSuccess } = usePostTeamSchedules();

  const getIsSelected = (id: number) => participants.includes(id);

  const selectMember = (id: number) => {
    if (getIsSelected(id)) {
      setParticipants(participants.filter((item) => item !== id));
      return;
    }
    setParticipants([...participants, id]);
  };

  const handleMeetingTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setTitle(value);

  const handleStartDateTimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setStartDatetime(value);
    setStartDatetimeStore(value);
  };

  const handleEndDateTimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setEndDatetime(value);
    setEndDatetimeStore(value);
  };

  const handleClickToggle = () => setIsOnlineMeeting((pre) => !pre);

  const handleSearchInMapClick = () => Router.push('./add/map');

  const handleSubmitNewMeeting = () => {
    // room 도메인 API가 수정될 때까지 더미 데이터를 임시로 사용합니다.
    mutate({
      title,
      startTime: startDatetime,
      endTime: endDatetime,
      participantsIds: [3, 6, 48],
      meetingLocation: {
        address,
        latitude: coords[0].toString(10),
        longitude: coords[1].toString(10)
      },
      roomId: 66
    });
  };

  const handleBackButtonClick = () => {
    setTitle('');
    setStartDatetimeStore('');
    setEndDatetimeStore('');
    setParticipants([]);
    Router.push('./suggestion');
  };

  return (
    <Background>
      <TopNavBar setting={false} onBackButtonClick={handleBackButtonClick} />
      <TitleContainer>
        <Title>회의 일정을 등록해보세요.</Title>
        <TextInput
          value={title}
          placeholder="회의 일정 제목을 입력하세요."
          onChange={handleMeetingTitleChange}
        />
      </TitleContainer>
      <TimePicker
        allDayOption={false}
        onChangeStartDatetime={handleStartDateTimeChange}
        onChangeEndDatetime={handleEndDateTimeChange}
        startDatetime={startDateStored || startDatetime}
        endDatetime={endDateStored || endDatetime}
      />
      <MemberListLabel>모임 구성원</MemberListLabel>
      {MEMBERS_MOCK.map(({ id, src, name }) => (
        <MemberList
          key={id}
          check={true}
          isChecked={getIsSelected(id)}
          onChange={() => selectMember(id)}
          {...{ src, name }}
        />
      ))}
      <ToggleContainer>
        <ToggleLabel>비대면 회의</ToggleLabel>
        <Toggle isOn={isOnlineMeeting} onClick={handleClickToggle} />
      </ToggleContainer>
      {isOnlineMeeting || (
        <AddressInputContainer>
          <TextInput
            placeholder="주소를 입력하세요."
            value={address}
            onChange={() => {}}
          />
          <SearchInMapButton
            color="navy"
            disabled={false}
            onClick={handleSearchInMapClick}
          >
            지도에서 찾기
          </SearchInMapButton>
        </AddressInputContainer>
      )}
      <ButtonFooter disabled={false} onClick={handleSubmitNewMeeting}>
        회의 만들기
      </ButtonFooter>
    </Background>
  );
};

export default Add;
