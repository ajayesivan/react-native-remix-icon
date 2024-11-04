import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuUnfoldFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 18v2H3v-2zM17 3.5l5 5-5 5zM12 11v2H3v-2zm0-7v2H3V4z" />
  </Svg>
);
export default SvgMenuUnfoldFill;
