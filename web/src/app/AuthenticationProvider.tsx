import { useAuthentication } from "@navtrack-ui-shared/hooks/authentication/useAuthentication";
import { useAxiosAuthorization } from "@navtrack-ui-shared/hooks/axios/useAxiosAuthorization";
import { AUTHENTICATION } from "../constants";

const AuthenticationProvider: React.FC = (props) => {
  useAxiosAuthorization();
  useAuthentication({
    clientId: AUTHENTICATION.CLIENT_ID
  });

  return <>{props.children}</>;
};

export default AuthenticationProvider;
