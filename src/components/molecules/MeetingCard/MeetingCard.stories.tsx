import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MEETINGS_MOCK } from '../../../__mocks__';
import MeetingCard from './index';

const PARTICIPANT_MOCK = MEETINGS_MOCK[0].participants;

export default {
  title: 'molecules/MeetingCard',
  component: MeetingCard
} as ComponentMeta<typeof MeetingCard>;

export const Primary: ComponentStory<typeof MeetingCard> = ({
  id,
  title = '회의 제목',
  address: location = '회의하는 곳의 주소',
  startTime: date = '2022년 10월 21일',
  profiles: participants = PARTICIPANT_MOCK,
  editLink = ''
}) => (
  <MeetingCard
    {...{
      id,
      title,
      address: location,
      startTime: date,
      profiles: participants,
      editLink
    }}
  />
);
