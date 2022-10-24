import styled from '@emotion/styled';

import { MEETINGS_MOCK } from '../../__mocks__';
import { MeetingCard } from '../../components/molecules';
import { GroupPage } from '../../components/templates';
import colors from '../../styles/colors';
import { semiBold16 } from '../../styles/typography';

const GROUP_NAME_MOCK = 'SW마에스트로 그룹';

export type Participant = {
  id: number;
  URL: string;
};

const SubTitle = styled.h2`
  ${semiBold16};
  color: ${colors.grayScale.gray04};
`;

const Home = () => {
  return (
    <GroupPage selectedTabIndex={0} groupName={GROUP_NAME_MOCK}>
      <SubTitle>가까운 회의 일정</SubTitle>
      {MEETINGS_MOCK.map(({ id, title, location, date, participants }) => (
        <MeetingCard key={id} {...{ title, location, date, participants }} />
      ))}
    </GroupPage>
  );
};

export default Home;
