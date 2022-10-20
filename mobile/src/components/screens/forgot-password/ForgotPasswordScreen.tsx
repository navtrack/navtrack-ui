import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NtTextButton } from "../../shared/NtTextButton";
import { NtTextInput } from "../../shared/NtTextInput";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const intl = useIntl();

  const [email, setEmail] = useState("");

  return (
    <SafeAreaView className="flex flex-grow bg-gray-900 p-6">
      <Text className="mb-4 text-center text-2xl font-bold text-white">
        <FormattedMessage id="login.forgot-password" />
      </Text>
      <View className="mb-2">
        <NtTextInput
          placeholder={intl.formatMessage({ id: "generic.email" })}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <NtTextButton
          onPress={() => Alert.alert("Incorrect email or password.")}>
          <FormattedMessage id="forgot-password.send-email" />
        </NtTextButton>
      </View>
      <View className="my-4 flex flex-row justify-center">
        <Text
          className="text-sm font-medium text-white"
          onPress={() => navigation.navigate("Login")}>
          <FormattedMessage id="create-account.already-have-account" />
        </Text>
      </View>
    </SafeAreaView>
  );
}
