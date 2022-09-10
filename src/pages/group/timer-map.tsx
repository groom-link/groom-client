import styled from '@emotion/styled';

import { TimerPopup, TopNavBar } from '../../components/molecules';
import colors from '../../styles/colors';

const Map = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: center;
  align-items: flex-end;
  justify-content: center;
  height: calc(100vh - 44px);
  padding-bottom: 42px;
  background-color: ${colors.grayScale.gray02};
`;

const TimerMap = () => {
  const handleClearTimerButtonClick = () => console.log('clicked');

  return (
    <>
      <TopNavBar backURL="/home" setting={false} />
      <Map>
        <TimerPopup
          type="button"
          onClick={handleClearTimerButtonClick}
          disabled={false}
          groupName="소마 그룹"
          timer="10:31"
        />
      </Map>
    </>
  );
};

export default TimerMap;
