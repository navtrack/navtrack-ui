import classNames from "classnames";
import { ReactNode, useState } from "react";
import { GestureResponderEvent, Pressable } from "react-native";

export type NtButtonProps = {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  customClassName?: string;
};

export function NtButton(props: NtButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={classNames(
        pressed ? "bg-gray-800" : "bg-gray-700",
        "flex items-center rounded-lg border border-gray-800 px-5 py-3 text-sm",
        props.customClassName
      )}>
      {props.children}
    </Pressable>
  );
}
