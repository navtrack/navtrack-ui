import { ExternalLoginButton } from "./ExternalLoginButton";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery
} from "expo-auth-session";

export const MicrosoftLoginButton = () => {
  // Endpoint
  const discovery = useAutoDiscovery(
    "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
  );
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "9d84be0e-6dc3-4388-8f7c-ae7038ef79ec",
      scopes: ["openid", "profile", "email", "offline_access"],
      redirectUri: "msal9d84be0e-6dc3-4388-8f7c-ae7038ef79ec://auth"
    },
    discovery
  );

  return (
    <ExternalLoginButton
      icon={faMicrosoft}
      onPress={() => {
        promptAsync();
      }}
    />
  );
};
