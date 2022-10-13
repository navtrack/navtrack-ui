import { atom } from "recoil";
import { getLocalStorageEffect } from "./util";

export type Token = {
  accessToken: string;
  refreshToken: string;
  expiryDate: string;
};

export type AuthenticationState = {
  isAuthenticated: boolean;
  token?: Token;
  initialized: boolean;
  recheckToken: boolean;
};

export const authenticationAtom = atom<AuthenticationState>({
  key: "App:Authentication",
  default: {
    isAuthenticated: false,
    initialized: false,
    recheckToken: false
  },
  effects: [getLocalStorageEffect("Authentication:Token")]
});
