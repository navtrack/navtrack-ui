import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { settingsAtom } from "../../state/app.settings";
import { useSettingsQuery } from "../queries/useSettingsQuery";

export const useSettings = () => {
  const settings = useSettingsQuery();
  const [state, setState] = useRecoilState(settingsAtom);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (settings.data && !updated) {
      setState({ settings: settings.data, initialized: true });
      setUpdated(true);
    }
  }, [setState, settings.data, state.initialized, updated]);

  return state.initialized;
};
