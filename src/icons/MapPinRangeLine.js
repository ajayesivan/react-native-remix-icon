import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMapPinRangeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgMapPinRangeLine;
