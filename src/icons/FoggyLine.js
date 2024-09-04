import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFoggyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M1.584 13.007a8 8 0 1 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908h-2.013Q21 12.758 21 12.5a3.5 3.5 0 0 0-6-2.45V10a6 6 0 1 0-11.193 3.007zM4 19h17v2H4zm-2-4h21v2H2z" />
  </Svg>
);
export default SvgFoggyLine;
