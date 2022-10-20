import { useSettings } from "@navtrack/ui-shared/hooks/settings/useSettings";
import { ReactNode } from "react";

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsProvider = (props: SettingsProviderProps) => {
  const settingsInitialized = useSettings();

  return <>{settingsInitialized && props.children}</>;
};
