import { useWebViewEventPublish } from "../../../hooks/useWebViewEventPublish";

export const useMapWebView = () => {
  const { webViewRef, publishEvent, loaded, setLoaded } =
    useWebViewEventPublish();

  return {
    webViewRef,
    publishEvent,
    mapLoaded: loaded,
    setMapLoaded: setLoaded
  };
};
