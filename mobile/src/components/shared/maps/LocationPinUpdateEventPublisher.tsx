import { MapEvents } from "@navtrack/ui-shared/hooks/map-events/events";
import { useCurrentAsset } from "@navtrack/ui-shared/newHooks/assets/useCurrentAsset";
import { useEffect } from "react";
import { useMapEvent } from "./useMapEvent";

export const LocationPinUpdateEventPublisher = () => {
  const currentAsset = useCurrentAsset();
  const { publishEvent } = useMapEvent();

  useEffect(() => {
    publishEvent(MapEvents.LocationPinUpdateEvent, {
      latitude: currentAsset?.location?.latitude,
      longitude: currentAsset?.location?.longitude,
      follow: true,
      resetZoom: true
    });
  }, [
    currentAsset?.location?.latitude,
    currentAsset?.location?.longitude,
    publishEvent
  ]);

  return null;
};
