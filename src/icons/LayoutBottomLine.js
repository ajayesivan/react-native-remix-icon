import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayoutBottomLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V5H4z" />
  </Svg>
);
export default SvgLayoutBottomLine;
