import { atom, selector } from "recoil";
import { getLocalStorageEffect } from "./util";

export type SettingKey =
  | "AppleAuthentication.ClientId"
  | "AppleAuthentication.RedirectUri"
  | "GoogleAuthentication.ClientId"
  | "MicrosoftAuthentication.ClientId"
  | "MicrosoftAuthentication.Authority"
  | "Sentry.Dsn"
  | "Application.Environment"
  | "Map.TileUrl";

export type SettingsState = {
  settings: Record<string, string>;
  initialized: boolean;
};

export const settingsAtom = atom<SettingsState>({
  key: "App:Settings",
  default: {
    settings: {},
    initialized: false
  },
  effects: [getLocalStorageEffect("App:Settings")]
});

export const settingsSelector = selector({
  key: "App:Settings:Selector",
  get: ({ get }) => {
    const state = get(settingsAtom);

    return state.settings as Record<SettingKey, string>;
  }
});
