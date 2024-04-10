import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrosshairLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 19.938A8.004 8.004 0 0019.938 13H17v-2h2.938A8.004 8.004 0 0013 4.062V7h-2V4.062A8.004 8.004 0 004.062 11H7v2H4.062A8.004 8.004 0 0011 19.938V17h2v2.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-8a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgCrosshairLine;
