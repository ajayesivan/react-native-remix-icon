import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStopLargeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
    </Svg>
  );
}

export default SvgStopLargeFill;
