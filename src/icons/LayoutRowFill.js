import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayoutRowFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M19 12H5v7h14zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
  </Svg>
);
export default SvgLayoutRowFill;
