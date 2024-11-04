import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
  </Svg>
);
export default SvgMenuFill;
