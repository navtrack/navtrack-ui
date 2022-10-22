import {
  faRightFromBracket,
  faRuler,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "@navtrack/ui-shared/hooks/authentication/useLogout";
import { useUpdateUserMutation } from "@navtrack/ui-shared/hooks/mutations/useUpdateUserMutation";
import { useGetCurrentUser } from "@navtrack/ui-shared/newHooks/assets/useGetCurrentUser";
import React, { ReactNode, useCallback, useState } from "react";
import {
  Linking,
  StyleProp,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { TailwindColors } from "../../../../tailwind";
import { NavtrackLogo } from "../../shared/NavtrackLogo";
import { NtIcon } from "../../shared/NtIcon";

export const SettingsScreen = () => {
  const logout = useLogout();
  const [imperialUnits, setImperialUnits] = useState(false);
  const currentUser = useGetCurrentUser();
  const updateUserMutation = useUpdateUserMutation();

  const toggleUnitsType = useCallback(async () => {
    const useImperialUnits = !imperialUnits;
    await updateUserMutation.mutateAsync({
      data: {
        unitsType: useImperialUnits ? 1 : 0
      }
    });
    setImperialUnits(useImperialUnits);
  }, [imperialUnits, updateUserMutation]);

  return (
    <View className="h-full bg-gray-800 p-2 text-white">
      <Text className="px-3 text-white">Logged in as</Text>
      <View
        style={{
          height: 50
        }}
        className="mt-2 flex flex-row items-center rounded-md bg-gray-700 px-3">
        <NtIcon icon={faUser} color={TailwindColors.white} size={20} />
        <Text className="ml-2 text-lg text-white">{currentUser?.email}</Text>
      </View>
      <Item>
        <NtIcon icon={faRuler} color={TailwindColors.white} size={20} />
        <Text className="ml-3 text-lg text-white">Imperial units</Text>
        <View className="flex flex-grow items-end">
          <Switch
            // trackColor={{ false: getColor("gray-700"), true: getColor("gray-700") }}
            // thumbColor={getColor("gray-200")}
            // ios_backgroundColor={getColor("gray-900")}
            onValueChange={toggleUnitsType}
            value={imperialUnits}
          />
        </View>
      </Item>
      <TouchableOpacity onPress={logout} activeOpacity={0.6}>
        <Item>
          <NtIcon
            icon={faRightFromBracket}
            color={TailwindColors.white}
            size={20}
          />
          <Text className="ml-3 text-lg text-white">Log out</Text>
        </Item>
      </TouchableOpacity>
      <View className="flex-grow items-center justify-end">
        <View
          style={{
            width: "100%",
            height: 40,
            alignItems: "center"
          }}>
          <NavtrackLogo />
        </View>
        <Text className="text-xs text-white">Version 1.0.0</Text>
        <View className="flex flex-row p-2">
          <Text className="text-xs font-semibold text-white">
            {`© ${new Date().getFullYear()} `}
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://codeagency.com")}>
            <Text className="text-xs font-semibold text-white">CodeAgency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

function Item(props: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return (
    <View
      style={{
        height: 50
      }}
      className="mt-2 flex flex-row items-center rounded-md bg-gray-900 px-3">
      {props.children}
    </View>
  );
}
