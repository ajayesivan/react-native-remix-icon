import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTimerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1112 4c2.125 0 4.078.736 5.618 1.968zM11 8v6h2V8h-2zM8 1h8v2H8V1z" />
    </Svg>
  );
}

export default SvgTimerFill;
