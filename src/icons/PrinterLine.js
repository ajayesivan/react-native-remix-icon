import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPrinterLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 2a1 1 0 011 1v4h3a1 1 0 011 1v10a1 1 0 01-1 1h-3v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2H3a1 1 0 01-1-1V8a1 1 0 011-1h3V3a1 1 0 011-1h10zm-1 15H8v3h8v-3zm4-8H4v8h2v-1a1 1 0 011-1h10a1 1 0 011 1v1h2V9zM8 10v2H5v-2h3zm8-6H8v3h8V4z" />
    </Svg>
  );
}

export default SvgPrinterLine;
