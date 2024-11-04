import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuFoldFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 18v2H3v-2zM7 3.5v10l-5-5zM21 11v2h-9v-2zm0-7v2h-9V4z" />
  </Svg>
);
export default SvgMenuFoldFill;
