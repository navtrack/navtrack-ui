import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type NtIconProps = {
  icon: IconProp;
  color?: string;
  size?: number;
  // style?: Style;
};

export function NtIcon(props: NtIconProps) {
  return (
    <FontAwesomeIcon
      // style={props.style}
      icon={props.icon}
      color={props.color}
      size={props.size}
    />
  );
}
