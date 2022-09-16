interface Window {
  kakao: any;
}

type Coords = [number, number];

type RenderKakaoMapProps = {
  coords: Coords;
  mapRef: RefObject<HTMLDivElement>;
};

type RenderCustomOverlayProps = {
  coords: Coords;
  content: string;
  map: any;
};

type MapDragEventProps = {
  map: any;
  eventHandler: () => void;
};

type MoveCenterOfMapProps = {
  map: any;
  coords: Coords;
};

type CalculateDestanceBetweenTwoPosition = {
  coords1: Coords;
  coords2: Coords;
};

type RenderDestinationMarker = ({
  coords,
  map
}: {
  coords: Coords;
  map: any;
}) => void;

type RenderProfileMarker = ({
  coords,
  map,
  profileImageURL
}: {
  coords: Coords;
  map: any;
  profileImageURL: string;
}) => void;

type CheckArrival = ({
  coords1,
  coords2,
  radiusMeter,
  onArrival,
  onNotArrival
}: {
  coords1: Coords;
  coords2: Coords;
  radiusMeter: number;
  onArrival: () => void;
  onNotArrival: () => void;
}) => void;
