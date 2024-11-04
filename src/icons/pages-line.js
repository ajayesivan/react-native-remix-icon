import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPagesLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 8v12h14V8zm0-2h14V4H5zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 10h4v4H7zm0 6h10v2H7zm6-5h4v2h-4z" />
  </Svg>
);
export default SvgPagesLine;
