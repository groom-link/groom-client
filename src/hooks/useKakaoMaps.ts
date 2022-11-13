import { useCallback, useEffect, useState } from 'react';

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
  const [targetDiv, setTargetDiv] = useState<HTMLDivElement | null>(null);
  const [map, setMap] = useState<any>();
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [center, setCenter] = useState<Coords>(coords);

  const setMapRefDiv = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setTargetDiv(node);
    }
  }, []);

  useEffect(() => {
    if (!targetDiv) return;
    window.kakao.maps.load(() => {
      const mapObj = renderKakapMap({ coords, mapRef: targetDiv });
      setMap(mapObj);
      addMapDragEventHandler({
        map: mapObj,
        eventHandler: () => {
          const Latlng = mapObj.getCenter();
          const latitude = Latlng.getLat();
          const longitude = Latlng.getLng();
          setCenter([latitude, longitude]);
          onMapDragEvent();
        }
      });
      setIsMapLoaded(true);

      return () =>
        removeMapDragEventHandler({
          map: mapObj,
          eventHandler: onMapDragEvent
        });
    });
  }, [coords, targetDiv, onMapDragEvent]);

  return { mapRef: setMapRefDiv, map, isMapLoaded, center };
};

export default useKakaoMaps;
