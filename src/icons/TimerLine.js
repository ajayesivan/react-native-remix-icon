import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTimerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1112 4c2.125 0 4.078.736 5.618 1.968zM12 20a7 7 0 100-14 7 7 0 000 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z" />
    </Svg>
  );
}

export default SvgTimerLine;
