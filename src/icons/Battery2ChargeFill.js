import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBattery2ChargeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1h3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h3zm4 8V7l-5 7h3v5l5-7h-3z" />
    </Svg>
  );
}

export default SvgBattery2ChargeFill;
