import { create } from "zustand";

type Store = {
  showModal: boolean;
  suggestLogin: boolean;
  setShowModal: (show: boolean) => void;
  setSuggestLogin: (show: boolean) => void;
};

const useStore = create<Store>((set) => ({
  showModal: false,
  suggestLogin: false,
  setShowModal(showModal) {
    set((state) => ({
      ...state,
      showModal,
    }));
  },
  setSuggestLogin(suggestLogin) {
    set((state) => ({
      ...state,
      suggestLogin,
    }));
  },
}));

export default useStore;
