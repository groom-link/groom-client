import { useEffect, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Button } from '../../../../components/atoms';
import { GPSButton, TopNavBar } from '../../../../components/molecules';
import { useCoords, useKakaoMaps } from '../../../../hooks';
import useNewMeetingFormStore from '../../../../store/meetingLocation';
import colors from '../../../../styles/colors';
import { shadow01 } from '../../../../styles/mixins';
import { bold16 } from '../../../../styles/typography';
import { moveCenterOfMap } from '../../../../utils/kakaoMapsTools';

const MapContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: calc(100vh - 44px);
  padding-bottom: 42px;
  background-color: ${colors.grayScale.gray02};
`;

const Maker = styled.div`
  z-index: 3;
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: ${colors.mainColor.purple};
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  animation-name: bounce;
  animation-fill-mode: both;
  animation-duration: 1s;

  &:after {
    content: '';
    width: 14px;
    height: 14px;
    margin: 8px 0 0 8px;
    background: ${colors.grayScale.white};
    position: absolute;
    border-radius: 50%;
  }
`;

const TimerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 3;
`;

const LocationSelectContainer = styled.div`
  ${shadow01}
  box-sizing: border-box;
  width: 374px;
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const Location = styled.h1`
  ${bold16};
  margin-bottom: 12px;
`;

const GPSButtonStyled = styled(GPSButton)`
  margin-bottom: 16px;
`;

const Map = () => {
  const coords = useCoords();
  const [isGPSButtonActive, setIsGPSButtonActive] = useState(true);
  const { mapRef, map, center } = useKakaoMaps({
    coords,
    onMapDragEvent: () => setIsGPSButtonActive(false)
  });
  const [address, setAddress] = useState('지도를 움직여 위치를 선택해주세요.');
  const setAddressStore = useNewMeetingFormStore((state) => state.setAddress);
  const setCoordsStore = useNewMeetingFormStore((state) => state.setCoords);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(
        center[1],
        center[0],
        (result: any, status: any) => {
          if (status !== window.kakao.maps.services.Status.OK) return;
          if (!result[0].road_address) return;

          const roadAddress = result[0].road_address.address_name;
          const jibunAddress = result[0].address.address_name;
          setAddress(roadAddress || jibunAddress);
        }
      );
    });
  }, [center, map]);

  const handleGPSButtonClick = () => {
    moveCenterOfMap({ map, coords });
    setIsGPSButtonActive(true);
  };

  const handleClickSetLocationButton = () => {
    setAddressStore(address);
    setCoordsStore(center);
    Router.push('./');
  };

  const handleBackButtonClick = () => Router.push('./');

  return (
    <>
      <TopNavBar setting={false} onBackButtonClick={handleBackButtonClick} />
      <MapContainer id="map" ref={mapRef}>
        <Maker />
        <TimerMenuContainer>
          <GPSButtonStyled
            selected={isGPSButtonActive}
            onClick={handleGPSButtonClick}
          />
          <LocationSelectContainer>
            <Location>{address}</Location>
            <Button
              color="purple"
              size="medium"
              onClick={handleClickSetLocationButton}
              disabled={false}
            >
              이 위치로 회의장소 설정
            </Button>
          </LocationSelectContainer>
        </TimerMenuContainer>
      </MapContainer>
    </>
  );
};

export default Map;
