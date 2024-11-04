import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatPollLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-7 2v8h-2V7zm4 2v6h-2V9zm-8 2v4H7v-4z" />
  </Svg>
);
export default SvgChatPollLine;
