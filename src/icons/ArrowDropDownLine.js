import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowDropDownLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 15-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414z" />
  </Svg>
);
export default SvgArrowDropDownLine;
