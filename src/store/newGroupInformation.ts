import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

type GroupInformationState = {
  profileImageURL: File | null;
  name: string;
  description: string;
  tags: string[];
  numberOfMembers: number;
  gifticonID: string;
  maximumNumberOfPenalty: number;
  setProfileImageURL: (profileImageURL: File | null) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setTags: (tags: string[]) => void;
  setNumberOfMembers: (numberOfMembers: number) => void;
  setGifticonID: (gifticonID: string) => void;
  setMaximumNumberOfPenalty: (maximumNumberOfPenalty: number) => void;
};

const useNewGroupInformationStore = create<GroupInformationState>((set) => ({
  profileImageURL: null,
  name: '',
  description: '',
  tags: [],
  numberOfMembers: 0,
  gifticonID: '',
  maximumNumberOfPenalty: 0,
  setProfileImageURL: (profileImageURL) => set({ profileImageURL }),
  setName: (name) => set({ name }),
  setDescription: (description: string) => set({ description }),
  setTags: (tags) => set({ tags }),
  setNumberOfMembers: (numberOfMembers) => set({ numberOfMembers }),
  setGifticonID: (gifticonID) => set({ gifticonID }),
  setMaximumNumberOfPenalty: (maximumNumberOfPenalty) =>
    set({ maximumNumberOfPenalty })
}));

mountStoreDevtool('NewGroupInformation', useNewGroupInformationStore);

export default useNewGroupInformationStore;
