import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { TailwindColors } from "../../../tailwind";
import { NtIcon } from "../shared/NtIcon";

export const LiveTrackingFollowButton = () => {
  const intl = useIntl();
  const [follow, setFollow] = useState(true);

  return (
    <View
      style={{
        left: 8,
        bottom: 8,
        right: 8
      }}
      className="absolute flex items-center rounded-md">
      <TouchableWithoutFeedback onPress={() => setFollow((p) => !p)}>
        <View className="flex flex-row items-center justify-center rounded-lg bg-gray-900 px-2 py-1">
          <NtIcon
            icon={faLocationArrow}
            color={follow ? TailwindColors.blue[500] : TailwindColors.gray[400]}
            size={9}
          />
          <Text
            className={
              follow
                ? "ml-1 text-xs font-semibold tracking-tight text-blue-500"
                : "ml-1 text-xs font-semibold tracking-tight text-gray-400"
            }>
            <FormattedMessage
              id="live-tracking.follow"
              values={{
                status: follow
                  ? intl.formatMessage({ id: "generic.on" })
                  : intl.formatMessage({ id: "generic.off" })
              }}
            />
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
