import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVideoChatLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14 10.25 17 8v6l-3-2.25V14H7V8h7zM5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" />
  </Svg>
);
export default SvgVideoChatLine;
