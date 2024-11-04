import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHailLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 17.419A8.003 8.003 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-9 5.197zM10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgHailLine;
