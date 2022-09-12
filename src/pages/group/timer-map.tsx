import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { TimerPopup, TopNavBar } from '../../components/molecules';
import colors from '../../styles/colors';
import {
  getDestinationMarkerMarkup,
  getProfileMarkerMarkup,
  renderCustomOverlay,
  renderKakapMap
} from '../../utils/kakaoMaps';

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

const Timer = styled(TimerPopup)`
  z-index: 3;
`;

const TimerMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleGetCurrentPositionSuccess: PositionCallback = ({
    coords: { latitude, longitude }
  }) => {
    window.kakao.maps.load(() => {
      const map = renderKakapMap(latitude, longitude, mapRef);
      renderCustomOverlay(
        latitude,
        longitude,
        getProfileMarkerMarkup(DEMO_PROFILE_IMAGE_URL),
        map
      );
      renderCustomOverlay(
        // TODO: 실제 약속 장소의 위도, 경도 연동하기.
        // 사용자의 프로필 마커와 도착 장소 마커를 한 눈에 볼 수 있도록 임시로 설정해놓았습니다.
        latitude + 0.001,
        longitude + 0.001,
        getDestinationMarkerMarkup(),
        map
      );
    });
  };

  const handleGetCurrentPositionError: PositionErrorCallback = ({ message }) =>
    alert(message);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleGetCurrentPositionSuccess,
      handleGetCurrentPositionError
    );
  }, []);

  const handleClearTimerButtonClick = () => console.log('clicked');

  return (
    <>
      <TopNavBar backURL="/home" setting={false} />
      <Map id="map" ref={mapRef}>
        <Timer
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
