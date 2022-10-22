import * as React from "react";
import { ReactNode, useRef, useState } from "react";
import { WebView } from "react-native-webview";

type MapWebViewProps = {
  ref?: React.RefObject<WebView>;
  children?: ReactNode;
};

type MapContext = {
  ref: React.RefObject<WebView>;
} | null;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MapContext = React.createContext<MapContext>(null);

export const MapWebView = (props: MapWebViewProps) => {
  const webViewRef = useRef<WebView>(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <WebView
      className="h-full"
      source={{ uri: "http://192.168.0.95:3000/maps" }}
      ref={webViewRef}
      onMessage={() => setLoaded(true)}>
      {loaded && (
        <MapContext.Provider value={{ ref: webViewRef }}>
          {props.children}
        </MapContext.Provider>
      )}
    </WebView>
  );
};
