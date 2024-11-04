import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowDropDownFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 14-4-4h8z" />
  </Svg>
);
export default SvgArrowDropDownFill;
