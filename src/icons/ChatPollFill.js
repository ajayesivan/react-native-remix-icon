import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatPollFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-8 4h-2v8h2zm4 2h-2v6h2zm-8 2H7v4h2z" />
  </Svg>
);
export default SvgChatPollFill;
