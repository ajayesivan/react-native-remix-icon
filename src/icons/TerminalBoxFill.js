import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTerminalBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 12v2h6v-2zm-3.586-3-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172z" />
  </Svg>
);
export default SvgTerminalBoxFill;
