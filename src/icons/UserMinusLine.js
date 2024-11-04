import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserMinusLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 14.252v2.09A6 6 0 006 22H4a8 8 0 0110-7.749zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm11 7v2h-8v-2h8z" />
    </Svg>
  );
}

export default SvgUserMinusLine;
