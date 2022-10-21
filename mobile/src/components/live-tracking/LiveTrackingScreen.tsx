import { useCurrentAsset } from "@navtrack/ui-shared/hooks/assets/useCurrentAsset";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useMapWebView } from "../shared/maps/useMapWebView";
import { Map } from "../shared/maps/Map";
import { LiveTrackingDetails } from "./LiveTrackingDetails";
import { LiveTrackingFollowButton } from "./LiveTrackingFollowButton";
import { MapWebView } from "../shared/maps/MapWebView";

export const LiveTrackingScreen = () => {
  const intl = useIntl();
  const currentAsset = useCurrentAsset();

  // const { webViewRef, publishEvent, mapLoaded, setMapLoaded } = useMapWebView();
  const [follow, setFollow] = useState(true);
  // const [previousAsset, setPreviousAsset] = useState(currentAsset);

  // useEffect(() => {
  //   if (currentAsset?.location && mapLoaded) {
  //     let resetZoom = false;
  //     if (currentAsset !== previousAsset) {
  //       setPreviousAsset(currentAsset);
  //       resetZoom = true;
  //     }

  //     publishEvent<LocationPinUpdateEvent>("LocationPinUpdateEvent", {
  //       location: currentAsset.location,
  //       follow: follow,
  //       resetZoom
  //     });
  //   }
  // }, [currentAsset, follow, mapLoaded, previousAsset, publishEvent]);

  return (
    <>
      <MapWebView />
      <LiveTrackingDetails />
      <LiveTrackingFollowButton />
    </>
  );
};
