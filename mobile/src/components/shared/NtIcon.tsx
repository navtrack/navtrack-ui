import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";

type NtIconProps = {
  icon: IconProp;
  color?: string;
  size?: number;
  customClassName?: string;
};

export function NtIcon(props: NtIconProps) {
  return (
    <View className={props.customClassName}>
      <FontAwesomeIcon
        icon={props.icon}
        color={props.color}
        size={props.size}
      />
    </View>
  );
}
