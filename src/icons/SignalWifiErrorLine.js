import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalWifiErrorLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.933 15.933 0 0012 5c-3.09 0-5.974.875-8.42 2.392l8.42 10.425L18 10.388v3.183L12 21 .69 6.997A17.925 17.925 0 0112 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z" />
    </Svg>
  );
}

export default SvgSignalWifiErrorLine;
