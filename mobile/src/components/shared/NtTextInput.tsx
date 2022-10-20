import { TextInput } from "react-native";
import { TailwindColors } from "../../../tailwind";

export type NtTextInputProps = {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

export function NtTextInput(props: NtTextInputProps) {
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholderTextColor={TailwindColors.gray[500]}
      secureTextEntry={props.secureTextEntry}
      className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 font-medium text-gray-100"
    />
  );
}
