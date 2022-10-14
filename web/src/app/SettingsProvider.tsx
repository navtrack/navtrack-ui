import { useSettings } from "@navtrack-ui-shared/hooks/settings/useSettings";

const SettingsProvider: React.FC = (props) => {
  const settingsInitialized = useSettings();

  return <>{settingsInitialized && props.children}</>;
};

export default SettingsProvider;
