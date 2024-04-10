import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuitcaseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 3a1 1 0 011 1v2h5a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h5V4a1 1 0 011-1h6zm1 5H8v11h8V8zM4 8v11h2V8H4zm10-3h-4v1h4V5zm4 3v11h2V8h-2z" />
    </Svg>
  );
}

export default SvgSuitcaseLine;
