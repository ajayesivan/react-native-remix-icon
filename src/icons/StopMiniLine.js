import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStopMiniLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm2 1v8h8V8H8z" />
    </Svg>
  );
}

export default SvgStopMiniLine;
