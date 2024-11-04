import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReplyFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81A9 9 0 0 0 13 15h-2z" />
  </Svg>
);
export default SvgReplyFill;
