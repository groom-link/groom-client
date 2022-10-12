import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

type GroupInformationState = {
  profileImageURL: string;
  name: string;
  description: string;
  tags: string[];
  numberOfMembers: number;
  gifticonID: string;
  maximumNumberOfPenalty: number;
  setProfileImageURL: (profileImageURL: string) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setTags: (tags: string[]) => void;
  setNumberOfMembers: (numberOfMembers: number) => void;
};

const useNewGroupInformationStore = create<GroupInformationState>((set) => ({
  profileImageURL: '',
  name: '',
  description: '',
  tags: [],
  numberOfMembers: 0,
  gifticonID: '',
  maximumNumberOfPenalty: 0,
  setProfileImageURL: (profileImageURL: string) => set({ profileImageURL }),
  setName: (name: string) => set({ name }),
  setDescription: (description: string) => set({ description }),
  setTags: (tags: string[]) => set({ tags }),
  setNumberOfMembers: (numberOfMembers: number) => set({ numberOfMembers })
}));

mountStoreDevtool('NewGroupInformation', useNewGroupInformationStore);

export default useNewGroupInformationStore;
