import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowDropUpLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 11.828-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414z" />
  </Svg>
);
export default SvgArrowDropUpLine;
