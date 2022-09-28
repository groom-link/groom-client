import { useEffect, useMemo, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import {
  GPSButton,
  TimerPopup,
  TopNavBar
} from '../../../components/molecules';
import { useCoords, usekakaoMaps } from '../../../hooks';
import colors from '../../../styles/colors';
import {
  checkArrival,
  moveCenterOfMap,
  renderDestinationMarker,
  renderProfileMarker
} from '../../../utils/kakaoMapsTools';

const ARRIVAL_ARIA_CIRCLE_RADIUS = 30 as const;

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
  // TODO: 실제 약속 장소의 위도, 경도 연동하기.
  // 사용자의 프로필 마커와 도착 장소 마커를 한 눈에 볼 수 있도록 임시로 설정해놓았습니다.
  const destinationCoords: [number, number] = useMemo(
    () => [coords[0] + 0.001, coords[1] + 0.001],
    [coords]
  );
  const [isGPSButtonActive, setIsGPSButtonActive] = useState(true);
  const [isTimerButtonDisabled, setIsTimerButtonDisabled] = useState(true);
  const { mapRef, map } = usekakaoMaps({
    coords,
    onMapDragEvent: () => setIsGPSButtonActive(false)
  });

  useEffect(() => {
    renderDestinationMarker({ coords: destinationCoords, map });
  }, [destinationCoords, map]);

  useEffect(() => {
    renderProfileMarker({
      coords,
      map,
      profileImageURL: DEMO_PROFILE_IMAGE_URL
    });
  }, [map, coords]);

  useEffect(() => {
    checkArrival({
      coords1: coords,
      coords2: destinationCoords,
      radiusMeter: ARRIVAL_ARIA_CIRCLE_RADIUS,
      onArrival: () => setIsTimerButtonDisabled(false),
      onNotArrival: () => setIsTimerButtonDisabled(true)
    });
  }, [coords, destinationCoords]);

  const handleClearTimerButtonClick = () => {
    const timer = 0; // TODO: 실제 시간 연동하기.
    if (timer === 0) {
      Router.push('./fail');
      return;
    }
    Router.push('./success');
  };

  const handleGPSButtonClick = () => {
    moveCenterOfMap({ map, coords });
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
            disabled={isTimerButtonDisabled}
            groupName="소마 그룹"
            timer="10:31"
          />
        </TimerMenuContainer>
      </Map>
    </>
  );
};

export default TimerMap;
