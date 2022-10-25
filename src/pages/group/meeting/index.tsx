import Router from 'next/router';

import { GROUP_NAME_MOCK, MEETINGS_MOCK } from '../../../__mocks__';
import { MeetingCard } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { GroupPage } from '../../../components/templates';

const Meeting = () => {
  const handleClickFooterButton = () => Router.push('./meeting/suggestion');

  return (
    <>
      <GroupPage groupName={GROUP_NAME_MOCK} selectedTabIndex={1}>
        {MEETINGS_MOCK.map(({ id, title, location, date, participants }) => (
          <MeetingCard
            key={id}
            {...{ title, location, date, participants }}
            editLink="./meeting"
          />
        ))}
        <ButtonFooter disabled={false} onClick={handleClickFooterButton}>
          회의 만들기
        </ButtonFooter>
      </GroupPage>
    </>
  );
};

export default Meeting;
