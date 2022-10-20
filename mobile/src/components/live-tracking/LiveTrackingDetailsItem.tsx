import React, { ReactNode } from "react";
import { Text, View } from "react-native";

type LiveTrackingDetailsItemProps = {
  name: string;
  value: ReactNode;
  width?: string;
};

export const LiveTrackingDetailsItem = (
  props: LiveTrackingDetailsItemProps
) => {
  return (
    <View style={{ width: props.width ? props.width : "25%" }}>
      <Text className="text-xs text-gray-400">{props.name}</Text>
      <Text className="text-sm font-medium text-white">
        {props.value ?? "-"}
      </Text>
    </View>
  );
};
