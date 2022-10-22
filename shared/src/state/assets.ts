import { atom } from "recoil";

export const scrollToAssetAtom = atom<string | undefined>({
  key: "Navtrack:Assets:ScrollToAtom",
  default: undefined
});

export const currentAssetIdAtom = atom<string | undefined>({
  key: "Navtrack:Assets:CurrentAsset:Id",
  default: undefined
});
