import { useAuthentication } from "@navtrack/ui-shared/hooks/authentication/useAuthentication";
import { useAxiosAuthorization } from "@navtrack/ui-shared/hooks/axios/useAxiosAuthorization";
import { ReactNode } from "react";

type AuthenticationProviderProps = {
  children: ReactNode;
};

export const AuthenticationProvider = (props: AuthenticationProviderProps) => {
  useAuthentication({ clientId: "navtrack.web" });
  useAxiosAuthorization();

  return <>{props.children}</>;
};
