import * as AppleAuthentication from "expo-apple-authentication";
import { ExternalLoginButton } from "./ExternalLoginButton";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export const AppleLoginButton = () => {
  return (
    <>
      <ExternalLoginButton
        icon={faApple}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.EMAIL
              ]
            });
            // signed in
          } catch (e) {
            if (e.code === "ERR_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    </>
  );
};
