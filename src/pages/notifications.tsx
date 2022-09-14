import { useState } from 'react';
import styled from '@emotion/styled';

import { NOTIFICATIONS } from '../__mocks__';
import { Calendar } from '../components/atoms/icons';
import { TopNavBar } from '../components/molecules';
import colors from '../styles/colors';
import { medium12, regular16, semiBold16 } from '../styles/typography';
import getElapsedTime from '../utils/getElapsedTime';

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

const Notifications = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

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
    </>
  );
};

export default Notifications;
