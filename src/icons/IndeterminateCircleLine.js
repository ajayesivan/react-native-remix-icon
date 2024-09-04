import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIndeterminateCircleLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-9h10v2H7z" />
  </Svg>
);
export default SvgIndeterminateCircleLine;
