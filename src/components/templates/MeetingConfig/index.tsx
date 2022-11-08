import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import colors from '../../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../../styles/typography';
import { TextButton, Toggle } from '../../atoms';
import { MemberList, TextInput, TopNavBar } from '../../molecules';
import ButtonFooter from '../../molecules/ButtonFooter';
import TimePicker from '../../molecules/TimePicker';

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

type Props = {
  title: string;
  onBackButtonClick: () => void;
  onMeetingTitleChange: ChangeEventHandler<HTMLInputElement>;
  onChangeStartDatetime: ChangeEventHandler<HTMLInputElement>;
  onChangeEndDatetime: ChangeEventHandler<HTMLInputElement>;
  startDatetime: string;
  endDatetime: string;
  getIsMemberSelected: (id: number) => boolean;
  onChangeMemberSelect: (id: number) => void;
  isOnlineMeetingToggleOn: boolean;
  onOnlineMeetingToggleChange: () => void;
  address: string;
  onSearchMapButtonClick: () => void;
  onSubmitMeeting: () => void;
};

const MeetingConfig = ({
  title,
  onBackButtonClick,
  onMeetingTitleChange,
  onChangeStartDatetime,
  onChangeEndDatetime,
  startDatetime,
  endDatetime,
  getIsMemberSelected,
  onChangeMemberSelect,
  isOnlineMeetingToggleOn,
  onOnlineMeetingToggleChange,
  address,
  onSearchMapButtonClick,
  onSubmitMeeting
}: Props) => {
  return (
    <Background>
      <TopNavBar setting={false} onBackButtonClick={onBackButtonClick} />
      <TitleContainer>
        <Title>회의 일정을 등록해보세요.</Title>
        <TextInput
          value={title}
          placeholder="회의 일정 제목을 입력하세요."
          onChange={onMeetingTitleChange}
        />
      </TitleContainer>
      <TimePicker
        allDayOption={false}
        {...{
          onChangeStartDatetime,
          onChangeEndDatetime,
          startDatetime,
          endDatetime
        }}
      />
      <MemberListLabel>모임 구성원</MemberListLabel>
      {MEMBERS_MOCK.map(({ id, src, name }) => (
        <MemberList
          key={id}
          check={true}
          isChecked={getIsMemberSelected(id)}
          onChange={() => onChangeMemberSelect(id)}
          {...{ src, name }}
        />
      ))}
      <ToggleContainer>
        <ToggleLabel>비대면 회의</ToggleLabel>
        <Toggle
          isOn={isOnlineMeetingToggleOn}
          onClick={onOnlineMeetingToggleChange}
        />
      </ToggleContainer>
      {isOnlineMeetingToggleOn || (
        <AddressInputContainer>
          <TextInput
            placeholder="주소를 입력하세요."
            value={address}
            onChange={() => {}}
          />
          <SearchInMapButton
            color="navy"
            disabled={false}
            onClick={onSearchMapButtonClick}
          >
            지도에서 찾기
          </SearchInMapButton>
        </AddressInputContainer>
      )}
      <ButtonFooter disabled={false} onClick={onSubmitMeeting}>
        회의 만들기
      </ButtonFooter>
    </Background>
  );
};

export default MeetingConfig;
