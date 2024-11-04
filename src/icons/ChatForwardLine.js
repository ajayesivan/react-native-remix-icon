import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatForwardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385 5.763 17H20V5H4zM12 10V7l4 4-4 4v-3H8v-2z" />
  </Svg>
);
export default SvgChatForwardLine;
