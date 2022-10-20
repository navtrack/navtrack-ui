import { FormattedMessage } from "react-intl";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { ReactNode, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  showModal: boolean;
  selectedDate: Date;
  customTitle?: ReactNode;
  onClose: (date: Date) => void;
  onChange?: (date: Date) => void;
};

export function DateModal(props: Props) {
  const [date, setDate] = useState(props.selectedDate);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showModal}
      className="bg-gray-900">
      <View className="flex h-full">
        <TouchableOpacity
          className="flex-1"
          onPressOut={() => props.onClose(date)}
        />
        <View>
          <View className="bg-gray-900">
            <View className="flex flex-row justify-between border-b border-t border-gray-800 p-3">
              <Text className="text-base font-medium text-white">
                {props.customTitle !== undefined ? (
                  props.customTitle
                ) : (
                  <FormattedMessage id="modal.date.title" />
                )}
              </Text>
              <TouchableOpacity onPressOut={() => props.onClose(date)}>
                <Text className="text-base font-medium text-white">
                  <FormattedMessage id="generic.save" />
                </Text>
              </TouchableOpacity>
            </View>
            <SafeAreaView className="flex">
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                display="spinner"
                textColor="white"
                className="text-white"
                themeVariant="dark"
                onChange={(_, selectedDate) => {
                  if (selectedDate) {
                    setDate(selectedDate);
                    props.onChange?.(selectedDate);
                  }
                }}
              />
            </SafeAreaView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
