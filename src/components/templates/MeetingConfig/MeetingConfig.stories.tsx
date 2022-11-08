import React, { ChangeEventHandler, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UseDatetimePicker } from '../../../hooks';
import MeetingConfig from './index';

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
