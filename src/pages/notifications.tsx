import { useState } from 'react';
import styled from '@emotion/styled';

import { Calendar } from '../components/atoms/icons';
import { TopNavBar } from '../components/molecules';
import colors from '../styles/colors';
import { medium12, regular16, semiBold16 } from '../styles/typography';
import getElapsedTime from '../utils/getElapsedTime';

export const NOTIFICATIONS = [
  {
    id: 0,
    content: '개발 동아리 모임 시간이 1시간 남았습니다.',
    time: '2021-09-13T14:10:00'
  },
  {
    id: 1,
    content: '개발 동아리 모임 시간이 1시간 남았습니다.',
    time: '2022-08-13T12:13:01'
  },
  {
    id: 2,
    content: '개발 동아리 모임 시간이 1시간 남았습니다.',
    time: '2022-09-12T12:13:01'
  },
  {
    id: 3,
    content: '개발 동아리 모임 시간이 1시간 남았습니다.',
    time: '2022-09-13T12:13:01'
  },
  {
    id: 4,
    content: '개발 동아리 모임 시간이 1시간 남았습니다.',
    time: '2022-09-13T12:13:01'
  }
];

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ReadAllButton = styled.button`
  ${semiBold16};
  width: 84px;
  height: 44px;
  margin: 8px 20px 8px 0;
  color: ${colors.grayScale.gray04};
`;

const Notification = styled.li`
  display: flex;
  padding: 16px 20px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-right: 12px;
  border-radius: 23px;
  background-color: ${colors.mainColor.navy};
`;

const Content = styled.span`
  ${regular16}
  display: block;
  margin-bottom: 4px;
  color: ${colors.grayScale.gray04};
`;

const Time = styled.time`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const EmptyDiscription = styled.span`
  ${regular16};
  display: block;
  margin-top: 200px;
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

const Notifications = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const isNotificationExists = notifications.length !== 0;

  const handleReadAllButton = () => setNotifications([]);
  // TODO: 알림 불러오기, 삭제하기 -> 실제 API 연동하기.

  return (
    <>
      <TopNavBar backURL="/home" setting={false} />
      <ButtonContainer>
        <ReadAllButton type="button" onClick={handleReadAllButton}>
          모두 읽기
        </ReadAllButton>
      </ButtonContainer>
      {isNotificationExists ? (
        <ul>
          {notifications.map(({ id, content, time }) => (
            <Notification key={id}>
              <IconContainer>
                <Calendar width="34px" color={colors.grayScale.white} />
              </IconContainer>
              <div>
                <Content>{content}</Content>
                <Time>{getElapsedTime(new Date(time), new Date())}</Time>
              </div>
            </Notification>
          ))}
        </ul>
      ) : (
        <EmptyDiscription>읽지 않은 알림이 없어요.</EmptyDiscription>
      )}
    </>
  );
};

export default Notifications;
