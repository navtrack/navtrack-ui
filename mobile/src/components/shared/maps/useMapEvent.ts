import { useCallback, useContext } from "react";
import {
  MapEvent,
  MapEvents
} from "../../../../../shared/src/hooks/map-events/events";
import { MapContext } from "./MapWebView";

export const useMapEvent = () => {
  const mapContext = useContext(MapContext);

  const publishEvent = useCallback(
    function (eventName: MapEvents, payload: MapEvent) {
      if (mapContext?.ref.current) {
        const javascript = `
      window.dispatchEvent(new CustomEvent("${eventName}", {detail: ${JSON.stringify(
          payload
        )} }));
      `;

        mapContext?.ref.current.injectJavaScript(javascript);
      }
    },
    [mapContext?.ref]
  );

  return { publishEvent };
};
