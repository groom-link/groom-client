import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import { TextButton, Toggle } from '../../../components/atoms';
import {
  MemberList,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import TimePicker from '../../../components/molecules/TimePicker';
import { UseDatetimePicker } from '../../../hooks';
import colors from '../../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../../styles/typography';

const MEMBERS_MOCK = [
  {
    id: 1,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 2,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 3,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 4,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 5,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
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
  const {
    startDatetime,
    endDatetime,
    handleChangeEndDatetime,
    handleChangeStartDatetime
  } = UseDatetimePicker();
  const [isOnlineMeeting, setIsOnlineMeeting] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const getIsSelected = (id: number) => selectedMembers.includes(id);

  const selectMember = (id: number) => {
    if (getIsSelected(id)) {
      setSelectedMembers((pre) => pre.filter((item) => item !== id));
      return;
    }
    setSelectedMembers((pre) => [...pre, id]);
  };

  const handleMeetingTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setMeetingTitle(value);

  const handleClickToggle = () => setIsOnlineMeeting((pre) => !pre);

  const handleSearchInMapClick = () => console.log('지도에서 찾기 클릭');

  const handleSubmitNewMeeting = () =>
    console.log({
      meetingTitle,
      startDatetime,
      endDatetime,
      selectedMembers
    });

  return (
    <Background>
      <TopNavBar setting={false} backURL="./suggestion" />
      <TitleContainer>
        <Title>회의 일정을 등록해보세요.</Title>
        <TextInput
          value={meetingTitle}
          placeholder="회의 일정 제목을 입력하세요."
          onChange={handleMeetingTitleChange}
        />
      </TitleContainer>
      <TimePicker
        allDayOption={false}
        onChangeEndDatetime={handleChangeEndDatetime}
        onChangeStartDatetime={handleChangeStartDatetime}
        {...{ startDatetime, endDatetime }}
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
            value={''}
            onChange={function (event: ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.');
            }}
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
