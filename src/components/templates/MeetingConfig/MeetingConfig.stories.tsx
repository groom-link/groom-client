import React, { ChangeEventHandler, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import { UseDatetimePicker } from '../../../hooks';
import MeetingConfig from './index';

const MEMBERS_MOCK = [
  {
    id: 1,
    profileImageURL: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름1'
  },
  {
    id: 2,
    profileImageURL: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름2'
  },
  {
    id: 3,
    profileImageURL: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름3'
  },
  {
    id: 4,
    profileImageURL: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름4'
  },
  {
    id: 5,
    profileImageURL: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름5'
  }
];

export default {
  title: 'templates/MeetingConfig',
  component: MeetingConfig
} as ComponentMeta<typeof MeetingConfig>;

export const Primary: ComponentStory<typeof MeetingConfig> = () => {
  const { startDatetime, endDatetime, setStartDatetime, setEndDatetime } =
    UseDatetimePicker();
  const [isOnlineMeeting, setIsOnlineMeeting] = useState(false);
  const [participants, setParticipants] = useState<number[]>([]);
  const [title, setTitle] = useState('');

  const getIsMemberSelected = (id: number) => participants.includes(id);

  const handleChangeMemberSelect = (id: number) => {
    if (getIsMemberSelected(id)) {
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
  }) => setStartDatetime(value);

  const handleEndDateTimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setEndDatetime(value);

  const handleClickToggle = () => setIsOnlineMeeting((pre) => !pre);

  const handleSearchInMapClick = () => console.log('Search in map');

  const handleSubmitNewMeeting = () => console.log('New meeting submitted');

  const handleBackButtonClick = () => console.log('Back button clicked');

  return (
    <MeetingConfig
      groupMembers={MEMBERS_MOCK}
      {...{
        startDatetime,
        endDatetime,
        isOnlineMeeting,
        participants,
        title
      }}
      onBackButtonClick={handleBackButtonClick}
      onChangeEndDatetime={handleEndDateTimeChange}
      onChangeStartDatetime={handleStartDateTimeChange}
      onChangeMemberSelect={handleChangeMemberSelect}
      onMeetingTitleChange={handleMeetingTitleChange}
      onSearchMapButtonClick={handleSearchInMapClick}
      onSubmitMeeting={handleSubmitNewMeeting}
      onOnlineMeetingToggleChange={handleClickToggle}
      getIsMemberSelected={getIsMemberSelected}
      isOnlineMeetingToggleOn={isOnlineMeeting}
      address="서울특별시 강남구 테헤란로 427"
    />
  );
};
