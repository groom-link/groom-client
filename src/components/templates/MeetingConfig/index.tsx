import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../../styles/typography';
import { TextButton } from '../../atoms';
import { MemberList, TextInput, TopNavBar } from '../../molecules';
import ButtonFooter from '../../molecules/ButtonFooter';
import TimePicker from '../../molecules/TimePicker';

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

type GroupMember = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

type Props = {
  onDeleteClick?: () => void;
  groupMembers: GroupMember[];
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
  submitText?: string;
  isSumbitButtonDisabled?: boolean;
};

const MeetingConfig = ({
  onDeleteClick,
  groupMembers,
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
  onSubmitMeeting,
  submitText,
  isSumbitButtonDisabled
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
      {groupMembers.map(({ id, profileImageUrl, nickname }) => (
        <MemberList
          key={id}
          check={true}
          isChecked={getIsMemberSelected(id)}
          onChange={() => onChangeMemberSelect(id)}
          {...{ src: profileImageUrl, name: nickname }}
        />
      ))}
      <ToggleContainer>
        {/* <ToggleLabel>비대면 회의</ToggleLabel>
        <Toggle
          isOn={isOnlineMeetingToggleOn}
          onClick={onOnlineMeetingToggleChange}
        /> */}
        {/* TODO: 비대면 회의 기능 추가하기. */}
        <ToggleLabel>회의 장소</ToggleLabel>
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
      <ButtonFooter
        disabled={!!isSumbitButtonDisabled}
        onClick={onSubmitMeeting}
      >
        {submitText || '회의 만들기'}
      </ButtonFooter>
    </Background>
  );
};

export default MeetingConfig;
