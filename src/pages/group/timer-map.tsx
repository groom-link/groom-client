import { useEffect, useRef } from 'react';
import Script from 'next/script';
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

const Timer = styled(TimerPopup)`
  z-index: 3;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

const TimerMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      new window.kakao.maps.Map(mapRef.current, options);
    });
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
