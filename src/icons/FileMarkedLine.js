import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileMarkedLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 4H5v16h14V4h-5v9l-3.5-2L7 13z" />
  </Svg>
);
export default SvgFileMarkedLine;
