import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgProgress4Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m18 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2 0a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6" />
  </Svg>
);
export default SvgProgress4Line;
