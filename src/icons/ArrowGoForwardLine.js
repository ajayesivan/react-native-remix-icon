import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowGoForwardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18.172 7H11a6 6 0 0 0 0 12h9v2h-9a8 8 0 0 1 0-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.415z" />
  </Svg>
);
export default SvgArrowGoForwardLine;
