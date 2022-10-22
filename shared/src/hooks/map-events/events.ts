export enum MapEvents {
  LocationPinUpdateEvent
}

export type MapEvent = LocationPinUpdateEvent;

export type LocationPinUpdateEvent = {
  latitude?: number;
  longitude?: number;
  follow?: boolean;
  resetZoom?: boolean;
};
