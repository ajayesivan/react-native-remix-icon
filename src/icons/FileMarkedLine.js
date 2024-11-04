import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileMarkedLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 4H5v16h14V4h-5v9l-3.5-2L7 13V4z" />
    </Svg>
  );
}

export default SvgFileMarkedLine;
