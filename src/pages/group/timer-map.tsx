import { useState } from 'react';
import styled from '@emotion/styled';

import { GPSButton, TimerPopup, TopNavBar } from '../../components/molecules';
import { useCoords, usekakaoMaps } from '../../hooks';
import colors from '../../styles/colors';
import { moveCenterOfMap } from '../../utils/kakaoMapsTools';

const Map = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: calc(100vh - 44px);
  padding-bottom: 42px;
  background-color: ${colors.grayScale.gray02};
`;

const TimerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 3;
`;

const GPSButtonStyled = styled(GPSButton)`
  margin-bottom: 16px;
`;

const TimerMap = () => {
  const coords = useCoords();
  const [isGPSButtonActive, setIsGPSButtonActive] = useState(true);
  const { mapRef, mapObj } = usekakaoMaps({
    coords,
    onMapDragEvent: () => setIsGPSButtonActive(false)
  });

  const handleClearTimerButtonClick = () => console.log('clicked');

  const handleGPSButtonClick = () => {
    moveCenterOfMap({ mapObj, coords });
    setIsGPSButtonActive(true);
  };

  return (
    <>
      <TopNavBar backURL="/home" setting={false} />
      <Map id="map" ref={mapRef}>
        <TimerMenuContainer>
          <GPSButtonStyled
            selected={isGPSButtonActive}
            onClick={handleGPSButtonClick}
          />
          <TimerPopup
            type="button"
            onClick={handleClearTimerButtonClick}
            disabled={false}
            groupName="소마 그룹"
            timer="10:31"
          />
        </TimerMenuContainer>
      </Map>
    </>
  );
};

export default TimerMap;
