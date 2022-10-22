import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { Text, TouchableOpacity, View } from "react-native";
import { NtIcon } from "../shared/NtIcon";
import { showAssetsSelectListModalAtom } from "./state";
import { useSetRecoilState } from "recoil";
import { useCurrentAsset } from "@navtrack/ui-shared/newHooks/assets/useCurrentAsset";
import { TailwindColors } from "../../../tailwind";
import { useGetAssets } from "@navtrack/ui-shared/newHooks/assets/useGetAssets";

export const AssetHeaderTitle = () => {
  const setShowAssetsSelectListModalAtom = useSetRecoilState(
    showAssetsSelectListModalAtom
  );
  const currentAsset = useCurrentAsset();
  const assets = useGetAssets();

  return (
    <View className="flex flex-row items-center justify-center">
      {currentAsset ? (
        <>
          <NtIcon
            customClassName="mr-2"
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
              customClassName="ml-2"
              size={14}
              icon={faChevronDown}
              color="white"
            />
          </TouchableOpacity>
        </>
      ) : assets.length === 0 ? (
        <View className="flex items-center">
          <Text className="text-base text-white">
            <FormattedMessage id="assets.header.no-items" />
          </Text>
        </View>
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
