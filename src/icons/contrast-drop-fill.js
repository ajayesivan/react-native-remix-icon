import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgContrastDropFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 .269 6.364 6.364a9 9 0 1 1-12.728 0zm0 2.828-4.95 4.95a7 7 0 0 0 4.954 11.95z" />
  </Svg>
);
export default SvgContrastDropFill;
