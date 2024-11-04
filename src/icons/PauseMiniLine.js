import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPauseMiniLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z" />
  </Svg>
);
export default SvgPauseMiniLine;
