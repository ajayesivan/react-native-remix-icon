import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTerminalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m11 12-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93zm0 7h10v2H11z" />
  </Svg>
);
export default SvgTerminalLine;
