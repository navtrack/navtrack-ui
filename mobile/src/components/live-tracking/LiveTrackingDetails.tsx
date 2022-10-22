import { useCurrentAsset } from "@navtrack/ui-shared/newHooks/assets/useCurrentAsset";
import { useDateTime } from "@navtrack/ui-shared/hooks/util/useDateTime";
import { useDistance } from "@navtrack/ui-shared/hooks/util/useDistance";
import React from "react";
import { useIntl } from "react-intl";
import { View } from "react-native";
import { LiveTrackingDetailsItem } from "./LiveTrackingDetailsItem";

export const LiveTrackingDetails = () => {
  const intl = useIntl();
  const currentAsset = useCurrentAsset();
  const { showDate, showTime } = useDateTime();
  const { showAltitude, showSpeed, showHeading } = useDistance();

  return (
    <>
      {currentAsset && currentAsset.location && (
        <View
          style={{
            backgroundColor: "rgba(17,24,39,.9)",
            left: 8,
            top: 8,
            right: 8
          }}
          className="absolute flex rounded-md">
          <View className="flex flex-row justify-between p-2">
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.date" })}
              value={showDate(currentAsset.location.dateTime)}
            />
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.time" })}
              value={showTime(currentAsset.location.dateTime)}
            />
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.latitude" })}
              value={currentAsset.location.latitude}
            />
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.longitude" })}
              value={currentAsset.location.longitude}
            />
          </View>
          <View className="flex flex-row justify-between px-2 pb-2">
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.speed" })}
              value={showSpeed(currentAsset.location.speed)}
            />
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.altitude" })}
              value={showAltitude(currentAsset.location.altitude)}
            />
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.heading" })}
              value={showHeading(currentAsset.location.heading)}
            />
            <LiveTrackingDetailsItem
              name={intl.formatMessage({ id: "generic.satellites" })}
              value={currentAsset.location.satellites}
            />
          </View>
        </View>
      )}
    </>
  );
};
