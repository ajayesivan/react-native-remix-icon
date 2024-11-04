import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 12v8h-2v-8H4l8-8 8 8z" />
  </Svg>
);
export default SvgArrowUpFill;
