import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMapPinTimeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM13 11h4v2h-6V6h2z" />
  </Svg>
);
export default SvgMapPinTimeLine;
