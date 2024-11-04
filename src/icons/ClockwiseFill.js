import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClockwiseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 10h3l-4 5-4-5h3V8a3 3 0 00-3-3h-4V3h4a5 5 0 015 5v2zm-7-1a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V10a1 1 0 011-1h10z" />
    </Svg>
  );
}

export default SvgClockwiseFill;
