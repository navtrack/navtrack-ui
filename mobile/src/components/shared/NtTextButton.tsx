import { Text } from "react-native";
import { NtButton, NtButtonProps } from "./NtButton";

export function NtTextButton(props: NtButtonProps) {
  return (
    <NtButton onPress={props.onPress} customClassName={props.customClassName}>
      <Text className="text-base font-semibold tracking-wide text-white">
        {props.children}
      </Text>
    </NtButton>
  );
}
