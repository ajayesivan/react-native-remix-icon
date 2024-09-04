import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgZoomInFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M10 10H7v2h3v3h2v-3h3v-2h-3V7h-2z" />
  </Svg>
);
export default SvgZoomInFill;
