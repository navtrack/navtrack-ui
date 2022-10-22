import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useSetRecoilState } from "recoil";
import { NtIcon } from "../shared/NtIcon";
import { currentAssetIdAtom } from "@navtrack/ui-shared/state/assets";
import { TailwindColors } from "../../../tailwind";
import { useGetAssets } from "@navtrack/ui-shared/newHooks/assets/useGetAssets";

type AssetScrollListItemProps = {
  title: string;
  id: string;
  index: number;
  online: boolean;
  closeModal: () => void;
};

export function AssetScrollListItem(props: AssetScrollListItemProps) {
  const assets = useGetAssets();
  const setCurrentAssetId = useSetRecoilState(currentAssetIdAtom);

  const border = useMemo(
    () => (assets && assets.length - 1 === props.index ? "" : "border-b"),
    [assets, props.index]
  );

  return (
    <View className={`border-gray-800 ${border}`}>
      <TouchableHighlight
        underlayColor={TailwindColors.gray[800]}
        onPress={() => {
          setCurrentAssetId(props.id);
          props.closeModal();
        }}>
        <View className={"flex flex-row items-center p-3"}>
          <View className="w-4 py-1">
            <NtIcon
              //className="mr-2"
              size={12}
              icon={faCircle}
              color={
                props.online
                  ? TailwindColors.green[600]
                  : TailwindColors.red[600]
              }
            />
          </View>
          <View className={`flex-1 items-center text-white`}>
            <Text className={`text-base text-white`}>{props.title}</Text>
          </View>
          <View className="w-4 py-1"></View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
