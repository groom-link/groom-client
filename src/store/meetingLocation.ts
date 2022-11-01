import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

type NewMeetingFormState = {
  title: string;
  startDate: string;
  endDate: string;
  participants: number[];
  coords: [number, number];
  address: string;
  setTitle: (title: string) => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
  setParticipants: (participants: number[]) => void;
  setCoords: (coords: [number, number]) => void;
  setAddress: (address: string) => void;
};

const useNewMeetingFormStore = create<NewMeetingFormState>((set) => ({
  title: '',
  startDate: '',
  endDate: '',
  participants: [],
  coords: [0, 0],
  address: '',
  setTitle: (title) => set({ title }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setParticipants: (participants) => set({ participants }),
  setCoords: (coords) => set({ coords }),
  setAddress: (address) => set({ address })
}));

mountStoreDevtool('MeetingLocation', useNewMeetingFormStore);

export default useNewMeetingFormStore;
