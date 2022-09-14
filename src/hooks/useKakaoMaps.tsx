import { useEffect, useRef, useState } from 'react';

import { DEMO_PROFILE_IMAGE_URL } from '../__mocks__';
import {
  getDestinationMarkerMarkup,
  getProfileMarkerMarkup,
  renderCustomOverlay,
  renderKakapMap
} from '../utils/kakaoMapsTools';

const useKakaoMaps = (coords: Coords) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapObj, setMapObj] = useState<any>();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const map = renderKakapMap({ coords, mapRef });
      setMapObj(map);
      renderCustomOverlay({
        coords,
        content: getProfileMarkerMarkup(DEMO_PROFILE_IMAGE_URL),
        map
      });
      renderCustomOverlay(
        // TODO: 실제 약속 장소의 위도, 경도 연동하기.
        // 사용자의 프로필 마커와 도착 장소 마커를 한 눈에 볼 수 있도록 임시로 설정해놓았습니다.
        {
          coords: [coords[0] + 0.001, coords[1] + 0.001],
          content: getDestinationMarkerMarkup(),
          map
        }
      );
    });
    setIsMapLoaded(true);
  }, [coords, mapRef]);

  return { mapRef, mapObj, isMapLoaded };
};

export default useKakaoMaps;
