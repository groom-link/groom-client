import { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import {
  GPSButton,
  TimerPopup,
  TopNavBar
} from '../../../components/molecules';
import {
  useCoords,
  useKakaoMaps,
  useMeetingIdParams,
  useRoomIdParams
} from '../../../hooks';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useGetScheduleDetail from '../../../hooks/api/teamSchedule/getScheduleDetail';
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
  height: calc(var(--vh, 1vh) * 100 - 44px);
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
  const roomId = useRoomIdParams();
  const meetingId = useMeetingIdParams();
  const [timer, setTimer] = useState('');
  const coords = useCoords();
  const [isGPSButtonActive, setIsGPSButtonActive] = useState(true);
  const [isTimerButtonDisabled, setIsTimerButtonDisabled] = useState(true);
  const {
    data: scheduleDetail,
    isLoading: isScheduleDetailLoading,
    isError: isScheduleDetailError
  } = useGetScheduleDetail(meetingId);
  const {
    data: myInformation,
    isLoading: isMyInformationLoading,
    isError: isMyInformationError
  } = useGetMyInformation();
  const onMapDragEvent = useCallback(() => setIsGPSButtonActive(false), []);
  const { mapRef, map } = useKakaoMaps({
    coords,
    onMapDragEvent
  });

  useEffect(() => {});

  useEffect(() => {
    if (!scheduleDetail) return;
    const {
      meetingLocation: { latitude, longitude }
    } = scheduleDetail;
    const destinationCoords = [Number(latitude), Number(longitude)] as Coords;
    renderDestinationMarker({ coords: destinationCoords, map });
  }, [scheduleDetail, map]);

  useEffect(() => {
    if (!myInformation) return;
    renderProfileMarker({
      coords,
      map,
      profileImageURL: myInformation.profileImageUrl
    });
  }, [map, coords, myInformation]);

  useEffect(() => {
    if (!scheduleDetail) return;
    const {
      meetingLocation: { latitude, longitude }
    } = scheduleDetail;
    const destinationCoords = [Number(latitude), Number(longitude)] as Coords;
    checkArrival({
      coords1: coords,
      coords2: destinationCoords,
      radiusMeter: ARRIVAL_ARIA_CIRCLE_RADIUS,
      onArrival: () => setIsTimerButtonDisabled(false),
      onNotArrival: () => setIsTimerButtonDisabled(true)
    });
  }, [coords, scheduleDetail]);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(() => {
        if (!scheduleDetail) return '로딩중';
        const { startTime } = scheduleDetail;
        const startTimeObj = new Date(startTime).valueOf();
        const currentTime = new Date().valueOf();
        const timeDiff = startTimeObj - currentTime;
        if (timeDiff < 0) return '종료';
        if (timeDiff < 30 * 60 * 1000) {
          const minutes = Math.floor(timeDiff / 1000 / 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);
          return `${minutes}분 ${seconds}초`;
        }
        return '대기중';
      });
    }, 1000);
    return () => clearInterval(id);
  }, [scheduleDetail]);

  const handleClearTimerButtonClick = () => {
    if (timer === '종료') {
      Router.push('./fail');
      return;
    }
    Router.push('./success');
  };

  const handleGPSButtonClick = () => {
    moveCenterOfMap({ map, coords });
    setIsGPSButtonActive(true);
  };

  const handleBackButtonClick = () =>
    Router.push(`/group/meeting?roomId=${roomId}`);

  if (isScheduleDetailLoading) return <div>로딩 중...</div>;
  if (isScheduleDetailError) return <div>에러 발생!</div>;
  if (scheduleDetail === undefined) return <div>데이터 없음!</div>;
  if (isMyInformationLoading) return <div>로딩 중...</div>;
  if (isMyInformationError) return <div>에러 발생!</div>;
  if (myInformation === undefined) return <div>데이터 없음!</div>;

  return (
    <>
      <TopNavBar onBackButtonClick={handleBackButtonClick} setting={false} />
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
            groupName={scheduleDetail.title}
            timer={timer}
          />
        </TimerMenuContainer>
      </Map>
    </>
  );
};

export default TimerMap;
