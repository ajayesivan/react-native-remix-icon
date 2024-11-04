import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgScanFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4.257 5.671 12 13.414 13.414 12 5.671 4.257A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329" />
  </Svg>
);
export default SvgScanFill;
