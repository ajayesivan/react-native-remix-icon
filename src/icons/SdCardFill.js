import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSdCardFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4.293 6.707 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5v4h2V5zm-3 0v4h2V5zM9 5v4h2V5z" />
  </Svg>
);
export default SvgSdCardFill;
