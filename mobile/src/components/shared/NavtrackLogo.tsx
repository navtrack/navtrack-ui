import React from "react";
import Svg, { Circle, G, Path, Rect } from "react-native-svg";
import { TailwindColors } from "../../../tailwind";

export const NavtrackLogo = () => {
  const newBody = "white";
  const circle = "transparent";
  const wing = newBody; //"#eeefee";
  const wingGrid = TailwindColors.gray[300]; //"#d1d5db";
  const wingArm = TailwindColors.gray[300]; //newArm; // "#dbd8dd";
  const bodyWrap = TailwindColors.gray[300]; // "#dbd8dd";
  const body = newBody; // "#eeefee";
  const antennaShadow = TailwindColors.gray[100]; //"#ececec";
  const antenna = newBody; // "#eeefee";
  const antennaPoint = TailwindColors.gray[300]; //"#dbd8dd";

  return (
    <Svg height="100%" width="100%" viewBox="0 0 128 128">
      <Circle cx={64} cy={64} fill={circle} r={64} data-name="Circle Grid" />
      <Path
        d="m87.503 88.902 1.373-1.373 5.394 5.394-1.373 1.373zM64.131 49.538l2.506-2.505 8.075 8.074-2.506 2.506z"
        fill={wingArm}
      />
      <Rect
        fill={wing}
        height={19.517}
        rx={1.64}
        transform="rotate(-45 81.413 40.358)"
        width={31.468}
        x={65.681}
        y={30.582}
      />
      <Rect
        fill={wingGrid}
        height={16.153}
        rx={0.239}
        transform="rotate(-45 81.413 40.358)"
        width={27.957}
        x={67.435}
        y={32.264}
      />
      <G fill={wing}>
        <Path d="m80.583 28.126.678-.678 12.915 12.915-.678.678z" />
        <Path d="m73.785 53.069-.678-.678 20.42-20.42.679.678zM69.424 48.708l-.678-.678 20.42-20.42.679.678z" />
        <Path d="m76.556 32.152.678-.678 12.915 12.915-.678.678zM72.529 36.178l.678-.678 12.915 12.916-.678.678zM68.5 40.206l.679-.678 12.915 12.915-.678.678z" />
      </G>
      <Path
        d="m57.63 72.214-2.506 2.506-8.075-8.075 2.506-2.505z"
        fill={wingArm}
      />
      <Rect
        fill={wing}
        height={19.517}
        rx={1.64}
        transform="rotate(-45 40.335 81.422)"
        width={31.468}
        x={24.613}
        y={71.649}
      />
      <Path
        d="M24.91 85.406 44.336 65.98a.24.24 0 0 1 .34 0L55.756 77.06a.239.239 0 0 1 0 .338L36.329 96.827a.239.239 0 0 1-.338 0l-11.08-11.08a.24.24 0 0 1 0-.34z"
        fill={wingGrid}
      />
      <Path d="m41.055 93.511-.678.678-12.915-12.915.678-.678z" fill={wing} />
      <Path
        d="m32.638 94.209-.678-.678 20.42-20.42.678.677zM28.277 89.846l-.678-.678 20.42-20.42.678.678z"
        fill={wing}
      />
      <Path
        d="m45.082 89.483-.678.678L31.49 77.245l.678-.678zM49.11 85.454l-.679.678-12.915-12.916.678-.678zM53.137 81.426l-.678.678L39.544 69.19l.678-.678z"
        fill={wing}
      />
      <Path
        d="M67.943 78.662 78.64 67.966l5.196 5.196-10.697 10.697zM56.381 40.1 54.8 38.517A11.51 11.51 0 1 0 38.52 54.8l1.58 1.579z"
        fill={bodyWrap}
      />
      <Path
        d="M82.1 65.82 56.381 40.1 40.1 56.379 65.822 82.1a1.39 1.39 0 0 0 1.972 0L82.1 67.792a1.4 1.4 0 0 0 0-1.972z"
        fill={body}
      />
      <Path
        d="M105 72.646c-4.6-4.6-19.152-4.673-28.088 4.263a41.785 41.785 0 0 0-1.825 1.943c-7.575 8.522-6.719 21.884-2.448 26.155z"
        fill={antennaShadow}
      />
      <Path
        d="M101.222 76.423c-4.271-4.271-17.623-5.137-26.135 2.428-7.575 8.522-6.719 21.884-2.448 26.155z"
        fill={antenna}
      />
      <Path
        d="M96.516 92.844a2.6 2.6 0 1 0 0 3.665 2.6 2.6 0 0 0 0-3.665z"
        fill={antennaPoint}
      />
    </Svg>
  );
};
