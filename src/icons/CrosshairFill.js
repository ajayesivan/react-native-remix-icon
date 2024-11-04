import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrosshairFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.938 13A8.004 8.004 0 0113 19.938V17h-2v2.938A8.004 8.004 0 014.062 13H7v-2H4.062A8.004 8.004 0 0111 4.062V7h2V4.062A8.004 8.004 0 0119.938 11H17v2h2.938zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgCrosshairFill;
