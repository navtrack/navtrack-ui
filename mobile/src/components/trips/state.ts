import { atom } from "recoil";

export const showDateModal = atom<boolean>({
  key: "Assets:Routes:ShowDateModal",
  default: false
});
