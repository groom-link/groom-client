import { RefObject } from 'react';

import colors from '../styles/colors';

const getProfileMarkerMarkup = (profileURL: string) => `
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

export const renderKakapMap = (
  latitude: number,
  longitude: number,
  mapRef: RefObject<HTMLDivElement>
) => {
  const options = {
    center: new window.kakao.maps.LatLng(latitude, longitude),
    level: 3
  };
  const map = new window.kakao.maps.Map(mapRef.current, options);
  return map;
};

export const renderProfileMarker = (
  latitude: number,
  longitude: number,
  profileURL: string,
  map: any
) => {
  const position = new window.kakao.maps.LatLng(latitude, longitude);
  const customMarker = new window.kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: getProfileMarkerMarkup(profileURL),
    yAnchor: 1
  });
  return customMarker;
};
