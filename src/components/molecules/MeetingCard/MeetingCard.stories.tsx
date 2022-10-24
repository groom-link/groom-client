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
  location = '회의하는 곳의 주소',
  date = '2022년 10월 21일',
  participants = PARTICIPANT_MOCK,
  editLink = ''
}) => <MeetingCard {...{ title, location, date, participants, editLink }} />;
