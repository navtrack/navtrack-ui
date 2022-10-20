import {
  faApple,
  faGoogle,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";
import { FormattedMessage } from "react-intl";
import { Text, View } from "react-native";
import ExternalLoginButton from "./ExternalLoginButton";

export default function ExternalLogins() {
  return (
    <View>
      <View className="flex flex-row items-center justify-center">
        <View className="h-px flex-1 bg-gray-400"></View>
        <Text className="mx-3 text-gray-400">
          <FormattedMessage id="login.sign-in-with" />
        </Text>
        <View className="h-px flex-1 bg-gray-400"></View>
      </View>
      <View className="mt-4 flex flex-row space-x-2">
        <ExternalLoginButton icon={faApple} />
        <View className="p-1" />
        <ExternalLoginButton icon={faMicrosoft} />
        <View className="p-1" />
        <ExternalLoginButton icon={faGoogle} />
      </View>
    </View>
  );
}
