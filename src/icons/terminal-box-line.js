import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTerminalBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm8 10h6v2h-6zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415z" />
  </Svg>
);
export default SvgTerminalBoxLine;
