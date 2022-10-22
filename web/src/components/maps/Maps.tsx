import { Map } from "../ui/shared/map/Map";
import { DEFAULT_MAP_CENTER } from "../../constants";
import { LocationPinUpdateEventHandler } from "./LocationPinUpdateEventHandler";

export function Maps() {
  return (
    <div className="flex min-h-screen">
      <Map
        center={{
          latitude: DEFAULT_MAP_CENTER.latitude,
          longitude: DEFAULT_MAP_CENTER.longitude
        }}
        hideZoomControl
        hideAttribution>
        <LocationPinUpdateEventHandler />
      </Map>
    </div>
  );
}
