import * as React from "react";
import MapView, { UrlTile } from "react-native-maps";
import { WebView } from "react-native-webview";

type MapProps = {};

export const Map = (props: MapProps) => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      className="h-full">
      <UrlTile
        /**
         * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
         * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
         */
        urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        /**
         * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
         * MKTileOverlay. iOS only.
         */
        maximumZ={19}
        /**
         * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
         * to be used. Its default value is false.
         */
        flipY={false}
      />
    </MapView>
  );
};
