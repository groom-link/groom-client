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
  mapObj: any;
  eventHandler: () => void;
};

type MoveCenterOfMapProps = {
  mapObj: any;
  coords: Coords;
};
