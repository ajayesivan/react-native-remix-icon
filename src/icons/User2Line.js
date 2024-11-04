import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUser2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 22a8 8 0 1116 0H4zm9-5.917V20h4.659A6.008 6.008 0 0013 16.083zM11 20v-3.917A6.008 6.008 0 006.341 20H11zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    </Svg>
  );
}

export default SvgUser2Line;
