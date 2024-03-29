import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MEETINGS_MOCK } from '../../../__mocks__';
import MeetingCard from './index';

const PARTICIPANT_MOCK = MEETINGS_MOCK[0].participants;

export default {
  title: 'molecules/MeetingCard',
  component: MeetingCard
} as ComponentMeta<typeof MeetingCard>;

export const Primary: ComponentStory<typeof MeetingCard> = ({
  title = '회의 제목',
  address: location = '회의하는 곳의 주소',
  startTime = '2022-10-06T00:00:00',
  profiles: participants = PARTICIPANT_MOCK,
  editLink = ''
}) => (
  <MeetingCard
    {...{
      title,
      address: location,
      startTime,
      profiles: participants,
      editLink
    }}
  />
);
