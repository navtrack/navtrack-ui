import { WebViewMapEvents } from "@navtrack/ui-shared/hooks/webView/types";
import { useCallback, useRef, useState } from "react";
import WebView from "react-native-webview";

export const useWebViewEventPublish = () => {
  const webViewRef = useRef<WebView>();
  const [loaded, setLoaded] = useState(false);

  const publishEvent = useCallback(function <T>(
    eventName: keyof typeof WebViewMapEvents,
    payload: T
  ) {
    if (webViewRef.current) {
      const javascript = `
      window.dispatchEvent(new CustomEvent("${eventName}", {detail: ${JSON.stringify(
        payload
      )} }));
      `;

      webViewRef.current.injectJavaScript(javascript);
    }
  },
  []);

  return { webViewRef, publishEvent, loaded, setLoaded: () => setLoaded(true) };
};
