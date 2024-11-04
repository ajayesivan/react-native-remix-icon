import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKickLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 2h8v2h2V2h8v8h-2v4h2v8h-8v-2h-2v2H3V2zm10 16h2v2h4v-4h-2v-2h-2v-4h2V8h2V4h-4v2h-2v2H9V4H5v16h4v-4h4v2z" />
    </Svg>
  );
}

export default SvgKickLine;
