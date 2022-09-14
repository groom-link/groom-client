import { useEffect, useState } from 'react';

const useCoords = () => {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCoords([latitude, longitude]),
      ({ message }) => alert(message)
    );
  }, []);

  return coords;
};

export default useCoords;
