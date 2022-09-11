import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { TimerPopup, TopNavBar } from '../../components/molecules';
import colors from '../../styles/colors';
import { renderKakapMap, renderProfileMarker } from '../../utils/kakaoMaps';

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
      renderProfileMarker(latitude, longitude, DEMO_PROFILE_IMAGE_URL, map);
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
