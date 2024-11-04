import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDropFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.636 6.633 12 .269l6.364 6.364a9 9 0 1 1-12.728 0" />
  </Svg>
);
export default SvgDropFill;
