import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMapPinAddLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z" />
  </Svg>
);
export default SvgMapPinAddLine;
