import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414z" />
  </Svg>
);
export default SvgArrowUpLine;
