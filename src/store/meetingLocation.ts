import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

type MeetingLocationState = {
  coords: [number, number];
  address: string;
  setCoords: (coords: [number, number]) => void;
  setAddress: (address: string) => void;
};

const meetingLocationStore = create<MeetingLocationState>((set) => ({
  coords: [0, 0],
  address: '',
  setCoords: (coords: [number, number]) => set({ coords }),
  setAddress: (address: string) => set({ address })
}));

mountStoreDevtool('MeetingLocation', meetingLocationStore);

export default meetingLocationStore;
