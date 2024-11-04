import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDraggable = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </Svg>
);
export default SvgDraggable;
