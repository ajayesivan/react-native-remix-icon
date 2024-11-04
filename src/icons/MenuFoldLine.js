import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuFoldLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 18v2H3v-2zM6.596 3.903 8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5zM21 11v2h-9v-2zm0-7v2h-9V4z" />
  </Svg>
);
export default SvgMenuFoldLine;
