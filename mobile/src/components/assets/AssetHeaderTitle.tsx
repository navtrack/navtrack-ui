import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { Text, TouchableOpacity, View } from "react-native";
import { NtIcon } from "../shared/NtIcon";
import { showAssetsSelectListModalAtom } from "./state";
import { useSetRecoilState } from "recoil";
import { useCurrentAsset } from "@navtrack/ui-shared/hooks/assets/useCurrentAsset";
import { TailwindColors } from "../../../tailwind";

export const AssetHeaderTitle = () => {
  const setShowAssetsSelectListModalAtom = useSetRecoilState(
    showAssetsSelectListModalAtom
  );

  const currentAsset = useCurrentAsset();

  return (
    <View className="flex flex-row items-center justify-center">
      {currentAsset ? (
        <>
          <NtIcon
            // className="mr-2"
            size={12}
            icon={faCircle}
            color={
              currentAsset.online
                ? TailwindColors.green[600]
                : TailwindColors.red[600]
            }
          />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
            onPress={() => setShowAssetsSelectListModalAtom(true)}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "white"
              }}>
              {currentAsset?.name}
            </Text>
            <NtIcon
              // className="ml-2"
              size={14}
              icon={faChevronDown}
              color="white"
            />
          </TouchableOpacity>
        </>
      ) : (
        <View className="flex items-center">
          <Text className="text-base text-white">
            <FormattedMessage id="assets.header.no-items" />
          </Text>
        </View>
      )}
    </View>
  );
};
