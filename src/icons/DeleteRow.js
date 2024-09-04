import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDeleteRow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 5 5 0 1 1-8 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-7 10v2h6v-2zm6-8H5v4h14z" />
  </Svg>
);
export default SvgDeleteRow;
