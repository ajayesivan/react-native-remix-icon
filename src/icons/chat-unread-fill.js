import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatUnreadFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2q.515 0 1-.1V18a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a5 5 0 0 0 5 5" />
  </Svg>
);
export default SvgChatUnreadFill;
