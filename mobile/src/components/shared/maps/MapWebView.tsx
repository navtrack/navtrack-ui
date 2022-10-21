import * as React from "react";
import { WebView } from "react-native-webview";

type MapWebViewProps = {
  ref?: React.RefObject<WebView>;
  setLoaded?: () => void;
};

export const MapWebView = (props: MapWebViewProps) => {
  return (
    <WebView
      className="h-full"
      source={{ uri: "http://192.168.0.95:3000/maps" }}
      ref={props.ref}
      onMessage={props.setLoaded}
    />
  );
};
