import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlipHorizontalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 2v20h2V2zM2 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm18 0v12h-3V6zm-3-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
  </Svg>
);
export default SvgFlipHorizontalLine;
