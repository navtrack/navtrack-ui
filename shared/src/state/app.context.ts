import { selector } from "recoil";
import { authenticationAtom } from "./app.authentication";
import { axiosAtom } from "./app.axios";
import { configAtom } from "./app.config";
import { settingsAtom } from "./app.settings";

export const appContextSelector = selector({
  key: "App:Context",
  get: ({ get }) => {
    const config = get(configAtom);
    const authentication = get(authenticationAtom);
    const settings = get(settingsAtom);
    const axios = get(axiosAtom);

    return {
      initialized:
        config.initialized &&
        settings.initialized &&
        authentication.initialized,
      config: config,
      axios: axios,
      authentication: authentication
    };
  }
});
