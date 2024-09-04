import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParkingFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 3h7a6 6 0 0 1 0 12h-3v6H6zm4 4v4h3a2 2 0 1 0 0-4z" />
  </Svg>
);
export default SvgParkingFill;
