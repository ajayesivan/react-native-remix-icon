import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStopLargeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 5h14v14H5V5zM4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4z" />
    </Svg>
  );
}

export default SvgStopLargeLine;
