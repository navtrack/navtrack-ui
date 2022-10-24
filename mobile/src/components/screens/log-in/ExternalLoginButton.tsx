import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { GestureResponderEvent } from "react-native";
import { TailwindColors } from "../../../../tailwind";
import { NtButton } from "../../shared/NtButton";

interface ExternalLoginButtonProps {
  icon: IconProp;
  onPress?: (event: GestureResponderEvent) => void;
}

export const ExternalLoginButton = (props: ExternalLoginButtonProps) => {
  return (
    <NtButton customClassName="grow" onPress={props.onPress}>
      <FontAwesomeIcon
        icon={props.icon}
        color={TailwindColors.white}
        size={20}
      />
    </NtButton>
  );
};
