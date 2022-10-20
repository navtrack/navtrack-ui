import { atom } from "recoil";

export const showAssetsSelectListModalAtom = atom<boolean>({
  key: "Assets:SelectListModal",
  default: false
});
