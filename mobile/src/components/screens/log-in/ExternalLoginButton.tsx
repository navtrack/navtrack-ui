import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { TailwindColors } from "../../../../tailwind";
import { NtButton } from "../../shared/NtButton";

interface IExternalLoginButton {
  icon: IconProp;
}

export default function ExternalLoginButton(props: IExternalLoginButton) {
  return (
    <NtButton customClassName="grow">
      <FontAwesomeIcon
        icon={props.icon}
        color={TailwindColors.white}
        size={20}
      />
    </NtButton>
  );
}
