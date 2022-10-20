import { useAxiosBaseUrls } from "@navtrack/ui-shared/hooks/axios/useAxiosBaseUrls";
import { useSetConfig } from "@navtrack/ui-shared/hooks/config/useSetConfig";
import { ReactNode } from "react";

type ConfigProviderProps = {
  children: ReactNode;
};

export const ConfigProvider = (props: ConfigProviderProps) => {
  const configInitialized = useSetConfig({
    apiUrl: "http://localhost:3001"
  });
  const interceptorInitialised = useAxiosBaseUrls();

  return <>{configInitialized && interceptorInitialised && props.children}</>;
};
