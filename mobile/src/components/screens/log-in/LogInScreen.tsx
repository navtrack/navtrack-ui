import { useLogin } from "@navtrack/ui-shared/hooks/authentication/useLogin";
import { authenticationAtom } from "@navtrack/ui-shared/state/app.authentication";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSetRecoilState } from "recoil";
import { NavtrackLogo } from "../../shared/NavtrackLogo";
import { NtTextButton } from "../../shared/NtTextButton";
import { NtTextInput } from "../../shared/NtTextInput";
import ExternalLogins from "./ExternalLogins";

export const LogInScreen = () => {
  const navigation = useNavigation();
  const intl = useIntl();

  const [email, setEmail] = useState("hello@andreisabau.com");
  const [password, setPassword] = useState("i@zQdWKTWN09YWK2&DHLhow8YjTX$s");
  const { internalLogin } = useLogin({
    clientId: "navtrack.web"
  });
  const setAuth = useSetRecoilState(authenticationAtom);

  return (
    <SafeAreaView className="flex flex-grow bg-gray-900 px-6">
      <View
        style={{
          width: "100%",
          height: 140,
          alignItems: "center"
        }}>
        <NavtrackLogo />
      </View>
      <Text className="mb-4 text-center text-2xl font-bold text-white">
        <FormattedMessage id="login.title" />
      </Text>
      <View className="mb-2">
        <NtTextInput
          placeholder={intl.formatMessage({ id: "generic.email" })}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="mb-2">
        <NtTextInput
          placeholder={intl.formatMessage({ id: "generic.password" })}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View>
        <NtTextButton
          onPress={() => {
            setAuth({
              initialized: true,
              isAuthenticated: true,
              recheckToken: false
            });
            // internalLogin({ username: email, password: password });
          }}>
          <FormattedMessage id="generic.login" />
        </NtTextButton>
      </View>
      <View className="my-4 flex flex-row justify-center">
        <Text
          className="text-sm font-medium text-white"
          onPress={() => navigation.navigate("CreateAccount")}>
          <FormattedMessage id="login.create-account" />
        </Text>
        <Text className="px-2 text-sm font-medium text-white">•</Text>
        <Text
          className="text-sm font-medium text-white"
          onPress={() => navigation.navigate("ForgotPassword")}>
          <FormattedMessage id="login.forgot-password" />
        </Text>
      </View>
      <ExternalLogins />
    </SafeAreaView>
  );
};
