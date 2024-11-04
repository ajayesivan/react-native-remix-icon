import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMapPinTimeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 11V6h-2v7h6v-2zm5.364 6.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0" />
  </Svg>
);
export default SvgMapPinTimeFill;
