import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandDiagonalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 3h-7.5l3.043 3.043-3.25 3.25 1.414 1.414 3.25-3.25L21 10.5zM3 21h7.5l-3.043-3.043 3.25-3.25-1.414-1.414-3.25 3.25L3 13.5z" />
  </Svg>
);
export default SvgExpandDiagonalFill;
