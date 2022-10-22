import { TripModel } from "@navtrack/ui-shared/api/model/generated";
import { MapEvents } from "@navtrack/ui-shared/hooks/map-events/events";
import { useEffect } from "react";
import { useMapEvent } from "./useMapEvent";

type TripUpdateEventPublisherProps = {
  trip?: TripModel;
};

export const TripUpdateEventPublisher = (
  props: TripUpdateEventPublisherProps
) => {
  const { publishEvent } = useMapEvent();

  useEffect(() => {
    publishEvent(MapEvents.TripUpdateEvent, {
      trip: props.trip
    });
  }, [props.trip, publishEvent]);

  return null;
};
