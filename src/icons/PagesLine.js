import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPagesLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
    </Svg>
  );
}

export default SvgPagesLine;
