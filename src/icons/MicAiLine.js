import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicAiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.467 7.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319A4.366 4.366 0 0120.724.931L20.47.32a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM3.055 11H5.07a7.002 7.002 0 0013.858 0h2.016A9.004 9.004 0 0113 18.945V23h-2v-4.055A9.004 9.004 0 013.055 11zM12 1a5 5 0 00-5 5v4a5 5 0 0010 0V7h-2v3a3 3 0 11-6 0V6a3 3 0 014.617-2.528l1.08-1.683A4.981 4.981 0 0012 1z" />
    </Svg>
  );
}

export default SvgMicAiLine;
