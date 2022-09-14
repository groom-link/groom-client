import colors from '../styles/colors';

export const getProfileMarkerMarkup = (profileURL: string) => `
  <style>
    .marker {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 35px;
      background-color: ${colors.mainColor.purple};
    }
    .profile-image {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      object-fit: cover;
    }
  </style>
  <div class="marker">
    <img class="profile-image" src=${profileURL} />
  </div>
`;

export const getDestinationMarkerMarkup = () => `
    <style>
      .pin {
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
      }
      .pin:after {
        content: "";
        width: 14px;
        height: 14px;
        margin: 8px 0 0 8px;
        background: ${colors.grayScale.white};
        position: absolute;
        border-radius: 50%;
      }
      .pulse {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        height: 14px;
        width: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: 11px 0px 0px -12px;
        transform: rotateX(55deg);
        z-index: -2;
      }
      .pulse:after {
        content: "";
        border-radius: 50%;
        height: 40px;
        width: 40px;
        position: absolute;
        margin: -13px 0 0 -13px;
        animation: pulsate 1s ease-out;
        animation-iteration-count: infinite;
        opacity: 0;
        filter: alpha(opacity=0);
        box-shadow: 0 0 1px 2px ${colors.mainColor.purple};
        animation-delay: 1.1s;
      }

      @keyframes pulsate {
        0% {
          transform: scale(0.1, 0.1);
          opacity: 0;
          filter: alpha(opacity=0);
        }
        50% {
          opacity: 1;
          filter: none;
        }
        100% {
          transform: scale(1.2, 1.2);
          opacity: 0;
          filter: alpha(opacity=0);
        }
      }

      @keyframes bounce {
        0% {
          opacity: 0;
          filter: alpha(opacity=0);
          transform: translateY(-2000px) rotate(-45deg);
        }
        60% {
          opacity: 1;
          filter: none;
          transform: translateY(30px) rotate(-45deg);
        }
        80% {
          transform: translateY(-10px) rotate(-45deg);
        }
        100% {
          transform: translateY(0) rotate(-45deg);
        }
      }
  </style>
  <div class='pin'></div>
  <div class='pulse'></div>
`;

export const renderKakapMap = ({ coords, mapRef }: RenderKakaoMapProps) => {
  const options = {
    center: new window.kakao.maps.LatLng(coords[0], coords[1]),
    level: 3
  };
  const map = new window.kakao.maps.Map(mapRef.current, options);
  return map;
};

export const renderCustomOverlay = ({
  coords,
  content,
  map
}: RenderCustomOverlayProps) => {
  const position = new window.kakao.maps.LatLng(coords[0], coords[1]);
  const customMarker = new window.kakao.maps.CustomOverlay({
    map,
    position,
    content,
    yAnchor: 1
  });
  return customMarker;
};

export const addMapDragEventHandler = ({
  mapObj,
  eventHandler
}: MapDragEventProps) =>
  window.kakao.maps.event.addListener(mapObj, 'dragend', eventHandler);

export const removeMapDragEventHandler = ({
  mapObj,
  eventHandler
}: MapDragEventProps) =>
  window.kakao.maps.event.removeListener(mapObj, 'dragend', eventHandler);

export const moveCenterOfMap = ({ mapObj, coords }: MoveCenterOfMapProps) => {
  const latlng = new window.kakao.maps.LatLng(coords[0], coords[1]);
  mapObj.panTo(latlng);
};
