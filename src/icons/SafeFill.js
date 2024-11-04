import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSafeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M18.005 20h-12v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2zm-7-6.126V17h2v-3.126a4.002 4.002 0 0 0-1-7.874 4 4 0 0 0-1 7.874m1-1.874a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgSafeFill;
