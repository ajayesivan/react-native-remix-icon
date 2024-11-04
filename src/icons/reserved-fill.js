import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReservedFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM8 8v2h8V8z" />
  </Svg>
);
export default SvgReservedFill;
