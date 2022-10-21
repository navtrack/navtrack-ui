import { authenticationAtom } from "@navtrack/ui-shared/state/authentication";
import { NavigationContainer } from "@react-navigation/native";
import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { AuthenticatedNavigator } from "./AuthenticatedNavigator";
import { UnauthenticatedNavigator } from "./UnauthenticatedNavigator";

export function Navigation() {
  const authentication = useRecoilValue(authenticationAtom);

  return (
    <NavigationContainer>
      {!authentication.isAuthenticated ? (
        <UnauthenticatedNavigator />
      ) : (
        <Suspense fallback={<></>}>
          <AuthenticatedNavigator />
        </Suspense>
      )}
    </NavigationContainer>
  );
}
