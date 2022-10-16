import { useAxiosBaseUrls } from "@navtrack/ui-shared/hooks/axios/useAxiosBaseUrls";
import { useSetConfig } from "@navtrack/ui-shared/hooks/config/useSetConfig";
import useLocalStorage from "../hooks/app/useLocalStorage";

const ConfigProvider: React.FC = (props) => {
  const configInitialized = useSetConfig({
    apiUrl: `${process.env.REACT_APP_API_URL}`
  });
  const localStorageInitialized = useLocalStorage();
  const interceptorInitialised = useAxiosBaseUrls();

  return (
    <>
      {configInitialized &&
        localStorageInitialized &&
        interceptorInitialised &&
        props.children}
    </>
  );
};

export default ConfigProvider;
