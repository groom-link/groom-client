import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { GPSButton, TimerPopup, TopNavBar } from '../../components/molecules';
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
  const mapRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [isGPSButtonActive, setIsGPSButtonActive] = useState(true);
  const [mapObj, setMapObj] = useState<any>();
  const [isMaploaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCoords([latitude, longitude]),
      ({ message }) => alert(message)
    );
  }, []);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const map = renderKakapMap(coords[0], coords[1], mapRef);
      setMapObj(map);
      renderCustomOverlay(
        coords[0],
        coords[1],
        getProfileMarkerMarkup(DEMO_PROFILE_IMAGE_URL),
        map
      );
      renderCustomOverlay(
        // TODO: 실제 약속 장소의 위도, 경도 연동하기.
        // 사용자의 프로필 마커와 도착 장소 마커를 한 눈에 볼 수 있도록 임시로 설정해놓았습니다.
        coords[0] + 0.001,
        coords[1] + 0.001,
        getDestinationMarkerMarkup(),
        map
      );
    });
    setIsMapLoaded(true);
  }, [coords]);

  useEffect(() => {
    if (!isMaploaded || !mapObj) return;

    const handleMapMoveEvent = () => setIsGPSButtonActive(false);

    window.kakao.maps.event.addListener(mapObj, 'dragend', handleMapMoveEvent);
    return () =>
      window.kakao.maps.event.removeListener(
        mapObj,
        'dragend',
        handleMapMoveEvent
      );
  }, [isMaploaded, mapObj]);

  const handleClearTimerButtonClick = () => console.log('clicked');

  const handleGPSButtonClick = () => {
    const latlng = new window.kakao.maps.LatLng(coords[0], coords[1]);
    mapObj.panTo(latlng);
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
