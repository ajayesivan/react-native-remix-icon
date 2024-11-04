import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatSearchLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5.763 17h7.32a6 6 0 0 0 0 2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.803a6 6 0 0 0-2-.72V5H4v13.385zm18.187 4.535-1.504-1.503a4 4 0 1 0-1.414 1.414l1.503 1.504zM21 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </Svg>
);
export default SvgChatSearchLine;
