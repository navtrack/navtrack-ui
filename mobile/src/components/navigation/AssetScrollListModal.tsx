import { useGetAssets } from "@navtrack/ui-shared/newHooks/assets/useGetAssets";
import { FormattedMessage } from "react-intl";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useRecoilState } from "recoil";
import { showAssetsSelectListModalAtom } from "../assets/state";
import { AssetScrollListItem } from "./AssetScrollListItem";

export const AssetScrollListModal = () => {
  const assets = useGetAssets();
  const [showModal, setShowModal] = useRecoilState(
    showAssetsSelectListModalAtom
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      className="bg-gray-900">
      <View className="flex h-full">
        <TouchableOpacity
          className="flex-1"
          onPressOut={() => setShowModal(false)}></TouchableOpacity>
        <View>
          <View className="bg-gray-900">
            <View className="flex flex-row justify-between border-b border-t border-gray-800 p-3">
              <Text className="text-base font-medium text-white">
                <FormattedMessage id="assets.select.title" />
              </Text>
            </View>
            <SafeAreaView className="flex">
              <ScrollView style={{ height: 220 }}>
                {assets?.map((x, index) => (
                  <AssetScrollListItem
                    title={x.name}
                    id={x.shortId}
                    key={x.id}
                    index={index}
                    online={x.online}
                    closeModal={() => setShowModal(false)}
                  />
                ))}
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </Modal>
  );
};
