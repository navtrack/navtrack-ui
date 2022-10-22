import React from "react";
import { LiveTrackingDetails } from "./LiveTrackingDetails";
import { LiveTrackingFollowButton } from "./LiveTrackingFollowButton";
import { MapWebView } from "../shared/maps/MapWebView";
import { LocationPinUpdateEventPublisher } from "../shared/maps/LocationPinUpdateEventPublisher";

export const LiveTrackingScreen = () => {
  return (
    <>
      <MapWebView>
        <LocationPinUpdateEventPublisher />
      </MapWebView>
      <LiveTrackingDetails />
      <LiveTrackingFollowButton />
    </>
  );
};
