import { useEffect, useRef, useState } from 'react';

import {
  addMapDragEventHandler,
  removeMapDragEventHandler,
  renderKakapMap
} from '../utils/kakaoMapsTools';

type Props = {
  coords: Coords;
  onMapDragEvent: () => void;
};

const useKakaoMaps = ({ coords, onMapDragEvent }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const mapObj = renderKakapMap({ coords, mapRef });
      setMap(mapObj);
      addMapDragEventHandler({ map: mapObj, eventHandler: onMapDragEvent });
      setIsMapLoaded(true);
      return () =>
        removeMapDragEventHandler({
          map: mapObj,
          eventHandler: onMapDragEvent
        });
    });
  }, [coords]);

  return { mapRef, map, isMapLoaded };
};

export default useKakaoMaps;
