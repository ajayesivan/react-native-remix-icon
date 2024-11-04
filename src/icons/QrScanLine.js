import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQrScanLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 16v5H3v-5h2v3h14v-3h2zM3 11h18v2H3v-2zm18-3h-2V5H5v3H3V3h18v5z" />
    </Svg>
  );
}

export default SvgQrScanLine;
