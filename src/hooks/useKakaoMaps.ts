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
  const [center, setCenter] = useState<Coords>(coords);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const mapObj = renderKakapMap({ coords, mapRef });
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
  }, [coords]);

  return { mapRef, map, isMapLoaded, center };
};

export default useKakaoMaps;
